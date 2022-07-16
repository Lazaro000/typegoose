import {
  prop,
  getModelForClass,
  Ref,
  DocumentType,
} from "@typegoose/typegoose";
import { Role } from "./Role";
import bcrypt from "bcryptjs";

export class User {
  @prop({ required: true }) // mongoose
  firstname: string; // typescript

  @prop({ required: true })
  lastname: string;

  @prop({ required: true, trim: true })
  email: string;

  @prop({ required: true, minlength: 6 })
  password: string;

  @prop({ ref: () => Role })
  roles: Ref<Role>[];

  public async encryptPassword(this: DocumentType<User>, password: string) {
    this.password = await bcrypt.hash(password, 10);
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
