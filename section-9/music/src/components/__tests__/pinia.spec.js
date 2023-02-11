import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "@/stores/user";

describe("stores", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("authenticate user", () => {
    const store = useUserStore();

    expect(store.userLoggedIn).not.toBe(true);
    store.authenticate({});
    expect(store.userLoggedIn).toBe(true);
  });
});
