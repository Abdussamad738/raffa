import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  exercise: {
    type: Array,
    default: [],
  },
  team_sports: {
    type: Object,
    default: {},
  },
  football: {
    type: Array,
    default: [],
  },
  basketball: {
    type: Array,
    default: [],
  },
  volleyball: {
    type: Array,
    default: [],
  },
  cricket: {
    type: Array,
    default: [],
  },
  racquet_sports: {
    type: Object,
    default: {},
  },
  badminton: {
    type: Array,
    default: [],
  },
  tennis: {
    type: Array,
    default: [],
  },
  table_tennis: {
    type: Array,
    default: [],
  },
  water_sports: {
    type: Array,
    default: [],
  },
  skating: {
    type: Object,
    default: {},
  },
  roller: {
    type: Array,
    default: [],
  },
  inline: {
    type: Array,
    default: [],
  },
  combat: {
    type: Array,
    default: [],
  },
  games: {
    type: Object,
    default: {},
  },
  billiards: {
    type: Array,
    default: [],
  },
  carrom: {
    type: Array,
    default: [],
  },
  darts: {
    type: Array,
    default: [],
  },
  cards: {
    type: Array,
    default: [],
  },
  others: {
    type: Array,
    default: [],
  },
  active_wear: {
    type: Object,
    default: {},
  },
  clothing: {
    type: Array,
    default: [],
  },
  footwear: {
    type: String,
    default: "",
  },
  trophies: {
    type: Array,
    default: [],
  },
  
},{ collection: "categories" });

const Category = mongoose.model("Category", CategorySchema);

export default Category;
