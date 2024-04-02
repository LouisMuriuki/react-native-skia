import { setupSkia } from "./setup";

describe("Surface", () => {
  it("A raster surface shouldn't leak", () => {
    const { Skia } = setupSkia();
    // When leaking, the WASM memory limit will be reached quite quickly
    // causing the test to fail
    for (let i = 0; i < 500; i++) {
      const surface = Skia.Surface.Make(1920, 1080)!;
      const canvas = surface.getCanvas();
      canvas.clear(Skia.Color("cyan"));
      surface.flush();
      const image = surface.makeImageSnapshot();
      image.dispose();
      surface.dispose();
    }
  });
});