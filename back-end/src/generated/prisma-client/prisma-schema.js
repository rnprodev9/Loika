module.exports = {
        typeDefs: /* GraphQL */ `type Address {
  id: ID!
  street1: String!
  street2: String
  city: String!
  postcode: Int!
  country: String!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  street1: String!
  street2: String
  city: String!
  postcode: Int!
  country: String!
}

input AddressCreateManyInput {
  create: [AddressCreateInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  street1_ASC
  street1_DESC
  street2_ASC
  street2_DESC
  city_ASC
  city_DESC
  postcode_ASC
  postcode_DESC
  country_ASC
  country_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input AddressScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  street1: String
  street1_not: String
  street1_in: [String!]
  street1_not_in: [String!]
  street1_lt: String
  street1_lte: String
  street1_gt: String
  street1_gte: String
  street1_contains: String
  street1_not_contains: String
  street1_starts_with: String
  street1_not_starts_with: String
  street1_ends_with: String
  street1_not_ends_with: String
  street2: String
  street2_not: String
  street2_in: [String!]
  street2_not_in: [String!]
  street2_lt: String
  street2_lte: String
  street2_gt: String
  street2_gte: String
  street2_contains: String
  street2_not_contains: String
  street2_starts_with: String
  street2_not_starts_with: String
  street2_ends_with: String
  street2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postcode: Int
  postcode_not: Int
  postcode_in: [Int!]
  postcode_not_in: [Int!]
  postcode_lt: Int
  postcode_lte: Int
  postcode_gt: Int
  postcode_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

input AddressUpdateDataInput {
  street1: String
  street2: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateInput {
  street1: String
  street2: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateManyDataInput {
  street1: String
  street2: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateManyInput {
  create: [AddressCreateInput!]
  update: [AddressUpdateWithWhereUniqueNestedInput!]
  upsert: [AddressUpsertWithWhereUniqueNestedInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyMutationInput {
  street1: String
  street2: String
  city: String
  postcode: Int
  country: String
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateOneInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AddressWhereUniqueInput
}

input AddressUpdateOneRequiredInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  connect: AddressWhereUniqueInput
}

input AddressUpdateWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateDataInput!
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressUpsertWithWhereUniqueNestedInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  street1: String
  street1_not: String
  street1_in: [String!]
  street1_not_in: [String!]
  street1_lt: String
  street1_lte: String
  street1_gt: String
  street1_gte: String
  street1_contains: String
  street1_not_contains: String
  street1_starts_with: String
  street1_not_starts_with: String
  street1_ends_with: String
  street1_not_ends_with: String
  street2: String
  street2_not: String
  street2_in: [String!]
  street2_not_in: [String!]
  street2_lt: String
  street2_lte: String
  street2_gt: String
  street2_gte: String
  street2_contains: String
  street2_not_contains: String
  street2_starts_with: String
  street2_not_starts_with: String
  street2_ends_with: String
  street2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postcode: Int
  postcode_not: Int
  postcode_in: [Int!]
  postcode_not_in: [Int!]
  postcode_lt: Int
  postcode_lte: Int
  postcode_gt: Int
  postcode_gte: Int
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateCartItem {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateSubscription {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CartItem {
  id: ID!
  quantity: Int!
  item: Subscription
  user: User!
}

type CartItemConnection {
  pageInfo: PageInfo!
  edges: [CartItemEdge]!
  aggregate: AggregateCartItem!
}

input CartItemCreateInput {
  quantity: Int
  item: SubscriptionCreateOneInput
  user: UserCreateOneWithoutCartInput!
}

input CartItemCreateManyWithoutUserInput {
  create: [CartItemCreateWithoutUserInput!]
  connect: [CartItemWhereUniqueInput!]
}

input CartItemCreateWithoutUserInput {
  quantity: Int
  item: SubscriptionCreateOneInput
}

type CartItemEdge {
  node: CartItem!
  cursor: String!
}

enum CartItemOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input CartItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [CartItemScalarWhereInput!]
  OR: [CartItemScalarWhereInput!]
  NOT: [CartItemScalarWhereInput!]
}

input CartItemUpdateInput {
  quantity: Int
  item: SubscriptionUpdateOneInput
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartItemUpdateManyDataInput {
  quantity: Int
}

input CartItemUpdateManyMutationInput {
  quantity: Int
}

input CartItemUpdateManyWithoutUserInput {
  create: [CartItemCreateWithoutUserInput!]
  delete: [CartItemWhereUniqueInput!]
  connect: [CartItemWhereUniqueInput!]
  disconnect: [CartItemWhereUniqueInput!]
  update: [CartItemUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CartItemUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CartItemScalarWhereInput!]
  updateMany: [CartItemUpdateManyWithWhereNestedInput!]
}

input CartItemUpdateManyWithWhereNestedInput {
  where: CartItemScalarWhereInput!
  data: CartItemUpdateManyDataInput!
}

input CartItemUpdateWithoutUserDataInput {
  quantity: Int
  item: SubscriptionUpdateOneInput
}

input CartItemUpdateWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput!
  data: CartItemUpdateWithoutUserDataInput!
}

input CartItemUpsertWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput!
  update: CartItemUpdateWithoutUserDataInput!
  create: CartItemCreateWithoutUserInput!
}

input CartItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  item: SubscriptionWhereInput
  user: UserWhereInput
  AND: [CartItemWhereInput!]
  OR: [CartItemWhereInput!]
  NOT: [CartItemWhereInput!]
}

input CartItemWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createCartItem(data: CartItemCreateInput!): CartItem!
  updateCartItem(data: CartItemUpdateInput!, where: CartItemWhereUniqueInput!): CartItem
  updateManyCartItems(data: CartItemUpdateManyMutationInput!, where: CartItemWhereInput): BatchPayload!
  upsertCartItem(where: CartItemWhereUniqueInput!, create: CartItemCreateInput!, update: CartItemUpdateInput!): CartItem!
  deleteCartItem(where: CartItemWhereUniqueInput!): CartItem
  deleteManyCartItems(where: CartItemWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createSubscription(data: SubscriptionCreateInput!): Subscription!
  updateSubscription(data: SubscriptionUpdateInput!, where: SubscriptionWhereUniqueInput!): Subscription
  updateManySubscriptions(data: SubscriptionUpdateManyMutationInput!, where: SubscriptionWhereInput): BatchPayload!
  upsertSubscription(where: SubscriptionWhereUniqueInput!, create: SubscriptionCreateInput!, update: SubscriptionUpdateInput!): Subscription!
  deleteSubscription(where: SubscriptionWhereUniqueInput!): Subscription
  deleteManySubscriptions(where: SubscriptionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  user: User!
  subscriptions(where: SubscriptionWhereInput, orderBy: SubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscription!]
  billingAddress: Address!
  shippingAddress: Address!
  deliveryTime: String!
  deliveryDayOfWeek: String!
  paymentDate: DateTime!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  user: UserCreateOneInput!
  subscriptions: SubscriptionCreateManyInput
  billingAddress: AddressCreateOneInput!
  shippingAddress: AddressCreateOneInput!
  deliveryTime: String!
  deliveryDayOfWeek: String!
  paymentDate: DateTime!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  deliveryTime_ASC
  deliveryTime_DESC
  deliveryDayOfWeek_ASC
  deliveryDayOfWeek_DESC
  paymentDate_ASC
  paymentDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input OrderUpdateInput {
  user: UserUpdateOneRequiredInput
  subscriptions: SubscriptionUpdateManyInput
  billingAddress: AddressUpdateOneRequiredInput
  shippingAddress: AddressUpdateOneRequiredInput
  deliveryTime: String
  deliveryDayOfWeek: String
  paymentDate: DateTime
}

input OrderUpdateManyMutationInput {
  deliveryTime: String
  deliveryDayOfWeek: String
  paymentDate: DateTime
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  subscriptions_every: SubscriptionWhereInput
  subscriptions_some: SubscriptionWhereInput
  subscriptions_none: SubscriptionWhereInput
  billingAddress: AddressWhereInput
  shippingAddress: AddressWhereInput
  deliveryTime: String
  deliveryTime_not: String
  deliveryTime_in: [String!]
  deliveryTime_not_in: [String!]
  deliveryTime_lt: String
  deliveryTime_lte: String
  deliveryTime_gt: String
  deliveryTime_gte: String
  deliveryTime_contains: String
  deliveryTime_not_contains: String
  deliveryTime_starts_with: String
  deliveryTime_not_starts_with: String
  deliveryTime_ends_with: String
  deliveryTime_not_ends_with: String
  deliveryDayOfWeek: String
  deliveryDayOfWeek_not: String
  deliveryDayOfWeek_in: [String!]
  deliveryDayOfWeek_not_in: [String!]
  deliveryDayOfWeek_lt: String
  deliveryDayOfWeek_lte: String
  deliveryDayOfWeek_gt: String
  deliveryDayOfWeek_gte: String
  deliveryDayOfWeek_contains: String
  deliveryDayOfWeek_not_contains: String
  deliveryDayOfWeek_starts_with: String
  deliveryDayOfWeek_not_starts_with: String
  deliveryDayOfWeek_ends_with: String
  deliveryDayOfWeek_not_ends_with: String
  paymentDate: DateTime
  paymentDate_not: DateTime
  paymentDate_in: [DateTime!]
  paymentDate_not_in: [DateTime!]
  paymentDate_lt: DateTime
  paymentDate_lte: DateTime
  paymentDate_gt: DateTime
  paymentDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  cartItem(where: CartItemWhereUniqueInput!): CartItem
  cartItems(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem]!
  cartItemsConnection(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartItemConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  subscription(where: SubscriptionWhereUniqueInput!): Subscription
  subscriptions(where: SubscriptionWhereInput, orderBy: SubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscription]!
  subscriptionsConnection(where: SubscriptionWhereInput, orderBy: SubscriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscriptionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  id: ID!
  title: String!
  shortDescription: String!
  longDescription: String!
  totalPrice: Int!
  mealPrice: Int!
  thumbnailImage: String
  largeImage: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SubscriptionConnection {
  pageInfo: PageInfo!
  edges: [SubscriptionEdge]!
  aggregate: AggregateSubscription!
}

input SubscriptionCreateInput {
  title: String!
  shortDescription: String!
  longDescription: String!
  totalPrice: Int!
  mealPrice: Int!
  thumbnailImage: String
  largeImage: String
}

input SubscriptionCreateManyInput {
  create: [SubscriptionCreateInput!]
  connect: [SubscriptionWhereUniqueInput!]
}

input SubscriptionCreateOneInput {
  create: SubscriptionCreateInput
  connect: SubscriptionWhereUniqueInput
}

type SubscriptionEdge {
  node: Subscription!
  cursor: String!
}

enum SubscriptionOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  shortDescription_ASC
  shortDescription_DESC
  longDescription_ASC
  longDescription_DESC
  totalPrice_ASC
  totalPrice_DESC
  mealPrice_ASC
  mealPrice_DESC
  thumbnailImage_ASC
  thumbnailImage_DESC
  largeImage_ASC
  largeImage_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input SubscriptionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  shortDescription: String
  shortDescription_not: String
  shortDescription_in: [String!]
  shortDescription_not_in: [String!]
  shortDescription_lt: String
  shortDescription_lte: String
  shortDescription_gt: String
  shortDescription_gte: String
  shortDescription_contains: String
  shortDescription_not_contains: String
  shortDescription_starts_with: String
  shortDescription_not_starts_with: String
  shortDescription_ends_with: String
  shortDescription_not_ends_with: String
  longDescription: String
  longDescription_not: String
  longDescription_in: [String!]
  longDescription_not_in: [String!]
  longDescription_lt: String
  longDescription_lte: String
  longDescription_gt: String
  longDescription_gte: String
  longDescription_contains: String
  longDescription_not_contains: String
  longDescription_starts_with: String
  longDescription_not_starts_with: String
  longDescription_ends_with: String
  longDescription_not_ends_with: String
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  mealPrice: Int
  mealPrice_not: Int
  mealPrice_in: [Int!]
  mealPrice_not_in: [Int!]
  mealPrice_lt: Int
  mealPrice_lte: Int
  mealPrice_gt: Int
  mealPrice_gte: Int
  thumbnailImage: String
  thumbnailImage_not: String
  thumbnailImage_in: [String!]
  thumbnailImage_not_in: [String!]
  thumbnailImage_lt: String
  thumbnailImage_lte: String
  thumbnailImage_gt: String
  thumbnailImage_gte: String
  thumbnailImage_contains: String
  thumbnailImage_not_contains: String
  thumbnailImage_starts_with: String
  thumbnailImage_not_starts_with: String
  thumbnailImage_ends_with: String
  thumbnailImage_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SubscriptionScalarWhereInput!]
  OR: [SubscriptionScalarWhereInput!]
  NOT: [SubscriptionScalarWhereInput!]
}

input SubscriptionUpdateDataInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
  thumbnailImage: String
  largeImage: String
}

input SubscriptionUpdateInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
  thumbnailImage: String
  largeImage: String
}

input SubscriptionUpdateManyDataInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
  thumbnailImage: String
  largeImage: String
}

input SubscriptionUpdateManyInput {
  create: [SubscriptionCreateInput!]
  update: [SubscriptionUpdateWithWhereUniqueNestedInput!]
  upsert: [SubscriptionUpsertWithWhereUniqueNestedInput!]
  delete: [SubscriptionWhereUniqueInput!]
  connect: [SubscriptionWhereUniqueInput!]
  disconnect: [SubscriptionWhereUniqueInput!]
  deleteMany: [SubscriptionScalarWhereInput!]
  updateMany: [SubscriptionUpdateManyWithWhereNestedInput!]
}

input SubscriptionUpdateManyMutationInput {
  title: String
  shortDescription: String
  longDescription: String
  totalPrice: Int
  mealPrice: Int
  thumbnailImage: String
  largeImage: String
}

input SubscriptionUpdateManyWithWhereNestedInput {
  where: SubscriptionScalarWhereInput!
  data: SubscriptionUpdateManyDataInput!
}

input SubscriptionUpdateOneInput {
  create: SubscriptionCreateInput
  update: SubscriptionUpdateDataInput
  upsert: SubscriptionUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SubscriptionWhereUniqueInput
}

input SubscriptionUpdateWithWhereUniqueNestedInput {
  where: SubscriptionWhereUniqueInput!
  data: SubscriptionUpdateDataInput!
}

input SubscriptionUpsertNestedInput {
  update: SubscriptionUpdateDataInput!
  create: SubscriptionCreateInput!
}

input SubscriptionUpsertWithWhereUniqueNestedInput {
  where: SubscriptionWhereUniqueInput!
  update: SubscriptionUpdateDataInput!
  create: SubscriptionCreateInput!
}

input SubscriptionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  shortDescription: String
  shortDescription_not: String
  shortDescription_in: [String!]
  shortDescription_not_in: [String!]
  shortDescription_lt: String
  shortDescription_lte: String
  shortDescription_gt: String
  shortDescription_gte: String
  shortDescription_contains: String
  shortDescription_not_contains: String
  shortDescription_starts_with: String
  shortDescription_not_starts_with: String
  shortDescription_ends_with: String
  shortDescription_not_ends_with: String
  longDescription: String
  longDescription_not: String
  longDescription_in: [String!]
  longDescription_not_in: [String!]
  longDescription_lt: String
  longDescription_lte: String
  longDescription_gt: String
  longDescription_gte: String
  longDescription_contains: String
  longDescription_not_contains: String
  longDescription_starts_with: String
  longDescription_not_starts_with: String
  longDescription_ends_with: String
  longDescription_not_ends_with: String
  totalPrice: Int
  totalPrice_not: Int
  totalPrice_in: [Int!]
  totalPrice_not_in: [Int!]
  totalPrice_lt: Int
  totalPrice_lte: Int
  totalPrice_gt: Int
  totalPrice_gte: Int
  mealPrice: Int
  mealPrice_not: Int
  mealPrice_in: [Int!]
  mealPrice_not_in: [Int!]
  mealPrice_lt: Int
  mealPrice_lte: Int
  mealPrice_gt: Int
  mealPrice_gte: Int
  thumbnailImage: String
  thumbnailImage_not: String
  thumbnailImage_in: [String!]
  thumbnailImage_not_in: [String!]
  thumbnailImage_lt: String
  thumbnailImage_lte: String
  thumbnailImage_gt: String
  thumbnailImage_gte: String
  thumbnailImage_contains: String
  thumbnailImage_not_contains: String
  thumbnailImage_starts_with: String
  thumbnailImage_not_starts_with: String
  thumbnailImage_ends_with: String
  thumbnailImage_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SubscriptionWhereInput!]
  OR: [SubscriptionWhereInput!]
  NOT: [SubscriptionWhereInput!]
}

input SubscriptionWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
  phone: String
  billingAddress: Address
  shippingAddress(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  paymentId: String
  avatar: String
  cart(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
  phone: String
  billingAddress: AddressCreateOneInput
  shippingAddress: AddressCreateManyInput
  paymentId: String
  avatar: String
  cart: CartItemCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutCartInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
  phone: String
  billingAddress: AddressCreateOneInput
  shippingAddress: AddressCreateManyInput
  paymentId: String
  avatar: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  phone_ASC
  phone_DESC
  paymentId_ASC
  paymentId_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phone: String
  billingAddress: AddressUpdateOneInput
  shippingAddress: AddressUpdateManyInput
  paymentId: String
  avatar: String
  cart: CartItemUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phone: String
  billingAddress: AddressUpdateOneInput
  shippingAddress: AddressUpdateManyInput
  paymentId: String
  avatar: String
  cart: CartItemUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phone: String
  paymentId: String
  avatar: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutCartDataInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
  phone: String
  billingAddress: AddressUpdateOneInput
  shippingAddress: AddressUpdateManyInput
  paymentId: String
  avatar: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  billingAddress: AddressWhereInput
  shippingAddress_every: AddressWhereInput
  shippingAddress_some: AddressWhereInput
  shippingAddress_none: AddressWhereInput
  paymentId: String
  paymentId_not: String
  paymentId_in: [String!]
  paymentId_not_in: [String!]
  paymentId_lt: String
  paymentId_lte: String
  paymentId_gt: String
  paymentId_gte: String
  paymentId_contains: String
  paymentId_not_contains: String
  paymentId_starts_with: String
  paymentId_not_starts_with: String
  paymentId_ends_with: String
  paymentId_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  cart_every: CartItemWhereInput
  cart_some: CartItemWhereInput
  cart_none: CartItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    