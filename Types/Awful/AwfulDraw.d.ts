interface IAwfulDraw {
  this: IAwfulDraw;
  enabled: boolean;
  Enable(this: IAwfulDraw): boolean;
  Disable(this: IAwfulDraw): boolean;
}

interface IAwfulDrawer {
  this: IAwfulDrawer;
  level: string;
  SetColor(r: number, g: number, b: number, a: number): void;
  SetColorRaw(r: number, g: number, b: number, a: number): void;
  SetWidth(width: number): void;
  RotateX(
    cx: number,
    cy: number,
    cz: number,
    px: number,
    py: number,
    pz: number,
    r: number
  ): void;
  RotateY(
    cx: number,
    cy: number,
    cz: number,
    px: number,
    py: number,
    pz: number,
    r: number
  ): void;
  RotateZ(
    cx: number,
    cy: number,
    cz: number,
    px: number,
    py: number,
    pz: number,
    r: number
  ): void;
  Line(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    maxD?: number
  ): void;
  Line2D(sx: number, sy: number, ex: number, ey: number): void;
  Circle(x: number, y: number, z: number, radius: number, steps?: number): void;
  FilledCircle(
    x: number,
    y: number,
    z: number,
    radius: number,
    steps?: number
  ): void;
  //Array(vectors, x, y, z, rotationX, rotationY, rotationZ)
  Text(text: string, font: string, x: number, y: number, z: number): void;
  Texture(texture: IAwfulDrawTexture, x: number, y: number, z: number): void;
  Arc(
    x: number,
    y: number,
    z: number,
    s: number,
    a: number,
    rotation: number
  ): void;
  Rectangle(
    x: number,
    y: number,
    z: number,
    w: number,
    l: number,
    rotation: number
  ): void;
  Cylinder(
    x: number,
    y: number,
    z: number,
    radius: number,
    height: number
  ): void;
}
interface IAwfulDrawTexture {
  /* Use wow api GetSpellTexture to get texture  */
  texture: string;
  width: number;
  height: number;
  alpha: number;
}
