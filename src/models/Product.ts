import { Comment } from "./Comment";
import {
  getModelForClass,
  prop,
  Ref,
  ReturnModelType,
} from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import { User } from "./User";

export class Product {
  @prop({ type: String, required: true, trim: true })
  name: string;

  @prop({ required: true, default: () => nanoid() })
  sku: string;

  @prop({ type: Number, default: 0 })
  price: number;

  @prop({ type: String, lowercase: true })
  url: string;

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ type: () => Comment })
  comments: Comment[];

  @prop({ type: () => User })
  owner: Ref<User>;

  public static async findByName(
    this: ReturnModelType<typeof Product>,
    name: string
  ) {
    return this.find({ name });
  }
}

const ProductModel = getModelForClass(Product);
export default ProductModel;
