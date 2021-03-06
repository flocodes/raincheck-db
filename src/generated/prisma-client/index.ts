// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  trip: (where?: TripWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  trip: (where: TripWhereUniqueInput) => TripNullablePromise;
  trips: (args?: {
    where?: TripWhereInput;
    orderBy?: TripOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Trip>;
  tripsConnection: (args?: {
    where?: TripWhereInput;
    orderBy?: TripOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TripConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTrip: (data: TripCreateInput) => TripPromise;
  updateTrip: (args: {
    data: TripUpdateInput;
    where: TripWhereUniqueInput;
  }) => TripPromise;
  updateManyTrips: (args: {
    data: TripUpdateManyMutationInput;
    where?: TripWhereInput;
  }) => BatchPayloadPromise;
  upsertTrip: (args: {
    where: TripWhereUniqueInput;
    create: TripCreateInput;
    update: TripUpdateInput;
  }) => TripPromise;
  deleteTrip: (where: TripWhereUniqueInput) => TripPromise;
  deleteManyTrips: (where?: TripWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  trip: (
    where?: TripSubscriptionWhereInput
  ) => TripSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TripOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "enabled_ASC"
  | "enabled_DESC"
  | "notify_at_ASC"
  | "notify_at_DESC"
  | "start_ASC"
  | "start_DESC"
  | "end_ASC"
  | "end_DESC"
  | "from_lat_ASC"
  | "from_lat_DESC"
  | "from_lon_ASC"
  | "from_lon_DESC"
  | "to_lat_ASC"
  | "to_lat_DESC"
  | "to_lon_ASC"
  | "to_lon_DESC"
  | "forecast_ASC"
  | "forecast_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type TripWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TripWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  user?: Maybe<UserWhereInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  enabled?: Maybe<Boolean>;
  enabled_not?: Maybe<Boolean>;
  notify_at?: Maybe<DateTimeInput>;
  notify_at_not?: Maybe<DateTimeInput>;
  notify_at_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  notify_at_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  notify_at_lt?: Maybe<DateTimeInput>;
  notify_at_lte?: Maybe<DateTimeInput>;
  notify_at_gt?: Maybe<DateTimeInput>;
  notify_at_gte?: Maybe<DateTimeInput>;
  start?: Maybe<DateTimeInput>;
  start_not?: Maybe<DateTimeInput>;
  start_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  start_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  start_lt?: Maybe<DateTimeInput>;
  start_lte?: Maybe<DateTimeInput>;
  start_gt?: Maybe<DateTimeInput>;
  start_gte?: Maybe<DateTimeInput>;
  end?: Maybe<DateTimeInput>;
  end_not?: Maybe<DateTimeInput>;
  end_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  end_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  end_lt?: Maybe<DateTimeInput>;
  end_lte?: Maybe<DateTimeInput>;
  end_gt?: Maybe<DateTimeInput>;
  end_gte?: Maybe<DateTimeInput>;
  from_lat?: Maybe<Float>;
  from_lat_not?: Maybe<Float>;
  from_lat_in?: Maybe<Float[] | Float>;
  from_lat_not_in?: Maybe<Float[] | Float>;
  from_lat_lt?: Maybe<Float>;
  from_lat_lte?: Maybe<Float>;
  from_lat_gt?: Maybe<Float>;
  from_lat_gte?: Maybe<Float>;
  from_lon?: Maybe<Float>;
  from_lon_not?: Maybe<Float>;
  from_lon_in?: Maybe<Float[] | Float>;
  from_lon_not_in?: Maybe<Float[] | Float>;
  from_lon_lt?: Maybe<Float>;
  from_lon_lte?: Maybe<Float>;
  from_lon_gt?: Maybe<Float>;
  from_lon_gte?: Maybe<Float>;
  to_lat?: Maybe<Float>;
  to_lat_not?: Maybe<Float>;
  to_lat_in?: Maybe<Float[] | Float>;
  to_lat_not_in?: Maybe<Float[] | Float>;
  to_lat_lt?: Maybe<Float>;
  to_lat_lte?: Maybe<Float>;
  to_lat_gt?: Maybe<Float>;
  to_lat_gte?: Maybe<Float>;
  to_lon?: Maybe<Float>;
  to_lon_not?: Maybe<Float>;
  to_lon_in?: Maybe<Float[] | Float>;
  to_lon_not_in?: Maybe<Float[] | Float>;
  to_lon_lt?: Maybe<Float>;
  to_lon_lte?: Maybe<Float>;
  to_lon_gt?: Maybe<Float>;
  to_lon_gte?: Maybe<Float>;
  AND?: Maybe<TripWhereInput[] | TripWhereInput>;
  OR?: Maybe<TripWhereInput[] | TripWhereInput>;
  NOT?: Maybe<TripWhereInput[] | TripWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  trips_every?: Maybe<TripWhereInput>;
  trips_some?: Maybe<TripWhereInput>;
  trips_none?: Maybe<TripWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface TripCreateInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneWithoutTripsInput;
  name?: Maybe<String>;
  enabled: Boolean;
  notify_at: DateTimeInput;
  start: DateTimeInput;
  end: DateTimeInput;
  from_lat: Float;
  from_lon: Float;
  to_lat: Float;
  to_lon: Float;
  forecast?: Maybe<Json>;
}

export interface UserCreateOneWithoutTripsInput {
  create?: Maybe<UserCreateWithoutTripsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutTripsInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
}

export interface TripUpdateInput {
  user?: Maybe<UserUpdateOneRequiredWithoutTripsInput>;
  name?: Maybe<String>;
  enabled?: Maybe<Boolean>;
  notify_at?: Maybe<DateTimeInput>;
  start?: Maybe<DateTimeInput>;
  end?: Maybe<DateTimeInput>;
  from_lat?: Maybe<Float>;
  from_lon?: Maybe<Float>;
  to_lat?: Maybe<Float>;
  to_lon?: Maybe<Float>;
  forecast?: Maybe<Json>;
}

export interface UserUpdateOneRequiredWithoutTripsInput {
  create?: Maybe<UserCreateWithoutTripsInput>;
  update?: Maybe<UserUpdateWithoutTripsDataInput>;
  upsert?: Maybe<UserUpsertWithoutTripsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutTripsDataInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpsertWithoutTripsInput {
  update: UserUpdateWithoutTripsDataInput;
  create: UserCreateWithoutTripsInput;
}

export interface TripUpdateManyMutationInput {
  name?: Maybe<String>;
  enabled?: Maybe<Boolean>;
  notify_at?: Maybe<DateTimeInput>;
  start?: Maybe<DateTimeInput>;
  end?: Maybe<DateTimeInput>;
  from_lat?: Maybe<Float>;
  from_lon?: Maybe<Float>;
  to_lat?: Maybe<Float>;
  to_lon?: Maybe<Float>;
  forecast?: Maybe<Json>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  trips?: Maybe<TripCreateManyWithoutUserInput>;
}

export interface TripCreateManyWithoutUserInput {
  create?: Maybe<TripCreateWithoutUserInput[] | TripCreateWithoutUserInput>;
  connect?: Maybe<TripWhereUniqueInput[] | TripWhereUniqueInput>;
}

export interface TripCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
  enabled: Boolean;
  notify_at: DateTimeInput;
  start: DateTimeInput;
  end: DateTimeInput;
  from_lat: Float;
  from_lon: Float;
  to_lat: Float;
  to_lon: Float;
  forecast?: Maybe<Json>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  trips?: Maybe<TripUpdateManyWithoutUserInput>;
}

export interface TripUpdateManyWithoutUserInput {
  create?: Maybe<TripCreateWithoutUserInput[] | TripCreateWithoutUserInput>;
  delete?: Maybe<TripWhereUniqueInput[] | TripWhereUniqueInput>;
  connect?: Maybe<TripWhereUniqueInput[] | TripWhereUniqueInput>;
  set?: Maybe<TripWhereUniqueInput[] | TripWhereUniqueInput>;
  disconnect?: Maybe<TripWhereUniqueInput[] | TripWhereUniqueInput>;
  update?: Maybe<
    | TripUpdateWithWhereUniqueWithoutUserInput[]
    | TripUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | TripUpsertWithWhereUniqueWithoutUserInput[]
    | TripUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<TripScalarWhereInput[] | TripScalarWhereInput>;
  updateMany?: Maybe<
    TripUpdateManyWithWhereNestedInput[] | TripUpdateManyWithWhereNestedInput
  >;
}

export interface TripUpdateWithWhereUniqueWithoutUserInput {
  where: TripWhereUniqueInput;
  data: TripUpdateWithoutUserDataInput;
}

export interface TripUpdateWithoutUserDataInput {
  name?: Maybe<String>;
  enabled?: Maybe<Boolean>;
  notify_at?: Maybe<DateTimeInput>;
  start?: Maybe<DateTimeInput>;
  end?: Maybe<DateTimeInput>;
  from_lat?: Maybe<Float>;
  from_lon?: Maybe<Float>;
  to_lat?: Maybe<Float>;
  to_lon?: Maybe<Float>;
  forecast?: Maybe<Json>;
}

export interface TripUpsertWithWhereUniqueWithoutUserInput {
  where: TripWhereUniqueInput;
  update: TripUpdateWithoutUserDataInput;
  create: TripCreateWithoutUserInput;
}

export interface TripScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  enabled?: Maybe<Boolean>;
  enabled_not?: Maybe<Boolean>;
  notify_at?: Maybe<DateTimeInput>;
  notify_at_not?: Maybe<DateTimeInput>;
  notify_at_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  notify_at_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  notify_at_lt?: Maybe<DateTimeInput>;
  notify_at_lte?: Maybe<DateTimeInput>;
  notify_at_gt?: Maybe<DateTimeInput>;
  notify_at_gte?: Maybe<DateTimeInput>;
  start?: Maybe<DateTimeInput>;
  start_not?: Maybe<DateTimeInput>;
  start_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  start_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  start_lt?: Maybe<DateTimeInput>;
  start_lte?: Maybe<DateTimeInput>;
  start_gt?: Maybe<DateTimeInput>;
  start_gte?: Maybe<DateTimeInput>;
  end?: Maybe<DateTimeInput>;
  end_not?: Maybe<DateTimeInput>;
  end_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  end_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  end_lt?: Maybe<DateTimeInput>;
  end_lte?: Maybe<DateTimeInput>;
  end_gt?: Maybe<DateTimeInput>;
  end_gte?: Maybe<DateTimeInput>;
  from_lat?: Maybe<Float>;
  from_lat_not?: Maybe<Float>;
  from_lat_in?: Maybe<Float[] | Float>;
  from_lat_not_in?: Maybe<Float[] | Float>;
  from_lat_lt?: Maybe<Float>;
  from_lat_lte?: Maybe<Float>;
  from_lat_gt?: Maybe<Float>;
  from_lat_gte?: Maybe<Float>;
  from_lon?: Maybe<Float>;
  from_lon_not?: Maybe<Float>;
  from_lon_in?: Maybe<Float[] | Float>;
  from_lon_not_in?: Maybe<Float[] | Float>;
  from_lon_lt?: Maybe<Float>;
  from_lon_lte?: Maybe<Float>;
  from_lon_gt?: Maybe<Float>;
  from_lon_gte?: Maybe<Float>;
  to_lat?: Maybe<Float>;
  to_lat_not?: Maybe<Float>;
  to_lat_in?: Maybe<Float[] | Float>;
  to_lat_not_in?: Maybe<Float[] | Float>;
  to_lat_lt?: Maybe<Float>;
  to_lat_lte?: Maybe<Float>;
  to_lat_gt?: Maybe<Float>;
  to_lat_gte?: Maybe<Float>;
  to_lon?: Maybe<Float>;
  to_lon_not?: Maybe<Float>;
  to_lon_in?: Maybe<Float[] | Float>;
  to_lon_not_in?: Maybe<Float[] | Float>;
  to_lon_lt?: Maybe<Float>;
  to_lon_lte?: Maybe<Float>;
  to_lon_gt?: Maybe<Float>;
  to_lon_gte?: Maybe<Float>;
  AND?: Maybe<TripScalarWhereInput[] | TripScalarWhereInput>;
  OR?: Maybe<TripScalarWhereInput[] | TripScalarWhereInput>;
  NOT?: Maybe<TripScalarWhereInput[] | TripScalarWhereInput>;
}

export interface TripUpdateManyWithWhereNestedInput {
  where: TripScalarWhereInput;
  data: TripUpdateManyDataInput;
}

export interface TripUpdateManyDataInput {
  name?: Maybe<String>;
  enabled?: Maybe<Boolean>;
  notify_at?: Maybe<DateTimeInput>;
  start?: Maybe<DateTimeInput>;
  end?: Maybe<DateTimeInput>;
  from_lat?: Maybe<Float>;
  from_lon?: Maybe<Float>;
  to_lat?: Maybe<Float>;
  to_lon?: Maybe<Float>;
  forecast?: Maybe<Json>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface TripSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TripWhereInput>;
  AND?: Maybe<TripSubscriptionWhereInput[] | TripSubscriptionWhereInput>;
  OR?: Maybe<TripSubscriptionWhereInput[] | TripSubscriptionWhereInput>;
  NOT?: Maybe<TripSubscriptionWhereInput[] | TripSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Trip {
  id: ID_Output;
  name?: String;
  enabled: Boolean;
  notify_at: DateTimeOutput;
  start: DateTimeOutput;
  end: DateTimeOutput;
  from_lat: Float;
  from_lon: Float;
  to_lat: Float;
  to_lon: Float;
  forecast?: Json;
}

export interface TripPromise extends Promise<Trip>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  name: () => Promise<String>;
  enabled: () => Promise<Boolean>;
  notify_at: () => Promise<DateTimeOutput>;
  start: () => Promise<DateTimeOutput>;
  end: () => Promise<DateTimeOutput>;
  from_lat: () => Promise<Float>;
  from_lon: () => Promise<Float>;
  to_lat: () => Promise<Float>;
  to_lon: () => Promise<Float>;
  forecast: () => Promise<Json>;
}

export interface TripSubscription
  extends Promise<AsyncIterator<Trip>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  name: () => Promise<AsyncIterator<String>>;
  enabled: () => Promise<AsyncIterator<Boolean>>;
  notify_at: () => Promise<AsyncIterator<DateTimeOutput>>;
  start: () => Promise<AsyncIterator<DateTimeOutput>>;
  end: () => Promise<AsyncIterator<DateTimeOutput>>;
  from_lat: () => Promise<AsyncIterator<Float>>;
  from_lon: () => Promise<AsyncIterator<Float>>;
  to_lat: () => Promise<AsyncIterator<Float>>;
  to_lon: () => Promise<AsyncIterator<Float>>;
  forecast: () => Promise<AsyncIterator<Json>>;
}

export interface TripNullablePromise
  extends Promise<Trip | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  name: () => Promise<String>;
  enabled: () => Promise<Boolean>;
  notify_at: () => Promise<DateTimeOutput>;
  start: () => Promise<DateTimeOutput>;
  end: () => Promise<DateTimeOutput>;
  from_lat: () => Promise<Float>;
  from_lon: () => Promise<Float>;
  to_lat: () => Promise<Float>;
  to_lon: () => Promise<Float>;
  forecast: () => Promise<Json>;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  trips: <T = FragmentableArray<Trip>>(args?: {
    where?: TripWhereInput;
    orderBy?: TripOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  trips: <T = Promise<AsyncIterator<TripSubscription>>>(args?: {
    where?: TripWhereInput;
    orderBy?: TripOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  trips: <T = FragmentableArray<Trip>>(args?: {
    where?: TripWhereInput;
    orderBy?: TripOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TripConnection {
  pageInfo: PageInfo;
  edges: TripEdge[];
}

export interface TripConnectionPromise
  extends Promise<TripConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TripEdge>>() => T;
  aggregate: <T = AggregateTripPromise>() => T;
}

export interface TripConnectionSubscription
  extends Promise<AsyncIterator<TripConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TripEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTripSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TripEdge {
  node: Trip;
  cursor: String;
}

export interface TripEdgePromise extends Promise<TripEdge>, Fragmentable {
  node: <T = TripPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TripEdgeSubscription
  extends Promise<AsyncIterator<TripEdge>>,
    Fragmentable {
  node: <T = TripSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTrip {
  count: Int;
}

export interface AggregateTripPromise
  extends Promise<AggregateTrip>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTripSubscription
  extends Promise<AsyncIterator<AggregateTrip>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TripSubscriptionPayload {
  mutation: MutationType;
  node: Trip;
  updatedFields: String[];
  previousValues: TripPreviousValues;
}

export interface TripSubscriptionPayloadPromise
  extends Promise<TripSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TripPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TripPreviousValuesPromise>() => T;
}

export interface TripSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TripSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TripSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TripPreviousValuesSubscription>() => T;
}

export interface TripPreviousValues {
  id: ID_Output;
  name?: String;
  enabled: Boolean;
  notify_at: DateTimeOutput;
  start: DateTimeOutput;
  end: DateTimeOutput;
  from_lat: Float;
  from_lon: Float;
  to_lat: Float;
  to_lon: Float;
  forecast?: Json;
}

export interface TripPreviousValuesPromise
  extends Promise<TripPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  enabled: () => Promise<Boolean>;
  notify_at: () => Promise<DateTimeOutput>;
  start: () => Promise<DateTimeOutput>;
  end: () => Promise<DateTimeOutput>;
  from_lat: () => Promise<Float>;
  from_lon: () => Promise<Float>;
  to_lat: () => Promise<Float>;
  to_lon: () => Promise<Float>;
  forecast: () => Promise<Json>;
}

export interface TripPreviousValuesSubscription
  extends Promise<AsyncIterator<TripPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  enabled: () => Promise<AsyncIterator<Boolean>>;
  notify_at: () => Promise<AsyncIterator<DateTimeOutput>>;
  start: () => Promise<AsyncIterator<DateTimeOutput>>;
  end: () => Promise<AsyncIterator<DateTimeOutput>>;
  from_lat: () => Promise<AsyncIterator<Float>>;
  from_lon: () => Promise<AsyncIterator<Float>>;
  to_lat: () => Promise<AsyncIterator<Float>>;
  to_lon: () => Promise<AsyncIterator<Float>>;
  forecast: () => Promise<AsyncIterator<Json>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Json = any;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Trip",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
export const prisma = new Prisma();
