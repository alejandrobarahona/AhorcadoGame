import { TestBed } from "@angular/core/testing";

import { InfogameService } from "./infogame.service";

describe("InfogameService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: InfogameService = TestBed.get(InfogameService);
    expect(service).toBeTruthy();
  });
});
