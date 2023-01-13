import {Visitor} from "../visitor.interface";

export interface Component {
    accept(visitor: Visitor): void;
}