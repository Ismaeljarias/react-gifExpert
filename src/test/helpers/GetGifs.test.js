import { getGifs } from "../../helpers/GetGifs";

describe("getGif Fetch tests", () => {
  test("should bring 10 elements", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("should bring 10 elements", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
