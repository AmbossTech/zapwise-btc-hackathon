import { Relay, finalizeEvent, nip19 } from "nostr-tools";

export const relay = new Relay("wss://relay.nostr.vet");

export const addExpense = async (
  groupId: string,
  amount: number,
  description: string,
  participants: string[],
  nsec: string
) => {
  const nsecArray = nip19.decode(nsec);
  if (nsecArray.type !== "nsec") {
    return;
  }

  let event = finalizeEvent(
    {
      kind: 1,
      created_at: Math.floor(Date.now() / 1000),
      tags: [["g", groupId]],
      content: JSON.stringify({
        description,
        amount,
        participants,
      }),
    },
    nsecArray.data
  );

  await relay.connect();
  await relay.publish(event);
};

export const getGroupExpenses = async (groupId: string) => {
  const events: any[] = [];

  await relay.connect();

  return new Promise((r) => {
    relay.subscribe(
      [
        {
          kinds: [1],
          "#g": ["amboss"],
        },
      ],
      {
        onevent(event) {
          events.push(event);
        },
        oneose() {
          r(events);
        },
      }
    );
  });
};
