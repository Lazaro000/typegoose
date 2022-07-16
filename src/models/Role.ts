import { getModelForClass, prop } from "@typegoose/typegoose";

export class Role {
  @prop()
  name: string;
}

const RoleModel = getModelForClass(Role);
export default RoleModel;
