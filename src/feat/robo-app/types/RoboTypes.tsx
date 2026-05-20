export type RoboStatus = "available" | "maintance" | "busy";
export interface RoboDataTypes {
  robo_id: string;
  name: string;
  battery: number;
  status: RoboStatus;
}
