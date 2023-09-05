export async function getEvents() {
  const res = await fetch(
    "https://next-f9003-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();

  return data;
}
