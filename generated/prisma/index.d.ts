
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    profiles: 'profiles',
    posts: 'posts',
    likes: 'likes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "profiles" | "posts" | "likes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    profiles?: profilesOmit
    posts?: postsOmit
    likes?: likesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    posts: number
    likes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    likes: number
    replies: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    replies?: boolean | PostsCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    name: string
    password: string
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    profile?: boolean | users$profileArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | users$profileArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      profile: Prisma.$profilesPayload<ExtArgs> | null
      posts: Prisma.$postsPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends users$profileArgs<ExtArgs> = {}>(args?: Subset<T, users$profileArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends users$likesArgs<ExtArgs> = {}>(args?: Subset<T, users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.profile
   */
  export type users$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    where?: profilesWhereInput
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.likes
   */
  export type users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    userid: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    userid: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    userid: number | null
    bio: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    userid: number | null
    bio: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    userid: number
    bio: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    userid?: true
  }

  export type ProfilesSumAggregateInputType = {
    userid?: true
  }

  export type ProfilesMinAggregateInputType = {
    userid?: true
    bio?: true
  }

  export type ProfilesMaxAggregateInputType = {
    userid?: true
    bio?: true
  }

  export type ProfilesCountAggregateInputType = {
    userid?: true
    bio?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    userid: number
    bio: string | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    bio?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    bio?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userid?: boolean
    bio?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    userid?: boolean
    bio?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userid" | "bio", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userid: number
      bio: string | null
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `userid`
     * const profilesWithUseridOnly = await prisma.profiles.findMany({ select: { userid: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `userid`
     * const profilesWithUseridOnly = await prisma.profiles.createManyAndReturn({
     *   select: { userid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `userid`
     * const profilesWithUseridOnly = await prisma.profiles.updateManyAndReturn({
     *   select: { userid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly userid: FieldRef<"profiles", 'Int'>
    readonly bio: FieldRef<"profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    parentId: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    userid: number | null
    parentId: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    userid: number | null
    text: string | null
    createdAt: Date | null
    likedByUser: boolean | null
    parentId: number | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    text: string | null
    createdAt: Date | null
    likedByUser: boolean | null
    parentId: number | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    userid: number
    text: number
    createdAt: number
    likedByUser: number
    parentId: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    userid?: true
    parentId?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    userid?: true
    parentId?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    userid?: true
    text?: true
    createdAt?: true
    likedByUser?: true
    parentId?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    userid?: true
    text?: true
    createdAt?: true
    likedByUser?: true
    parentId?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    userid?: true
    text?: true
    createdAt?: true
    likedByUser?: true
    parentId?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    userid: number
    text: string | null
    createdAt: Date
    likedByUser: boolean
    parentId: number | null
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    text?: boolean
    createdAt?: boolean
    likedByUser?: boolean
    parentId?: boolean
    poster?: boolean | usersDefaultArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    parent?: boolean | posts$parentArgs<ExtArgs>
    replies?: boolean | posts$repliesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    text?: boolean
    createdAt?: boolean
    likedByUser?: boolean
    parentId?: boolean
    poster?: boolean | usersDefaultArgs<ExtArgs>
    parent?: boolean | posts$parentArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    text?: boolean
    createdAt?: boolean
    likedByUser?: boolean
    parentId?: boolean
    poster?: boolean | usersDefaultArgs<ExtArgs>
    parent?: boolean | posts$parentArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    userid?: boolean
    text?: boolean
    createdAt?: boolean
    likedByUser?: boolean
    parentId?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "text" | "createdAt" | "likedByUser" | "parentId", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | usersDefaultArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    parent?: boolean | posts$parentArgs<ExtArgs>
    replies?: boolean | posts$repliesArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | usersDefaultArgs<ExtArgs>
    parent?: boolean | posts$parentArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | usersDefaultArgs<ExtArgs>
    parent?: boolean | posts$parentArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      poster: Prisma.$usersPayload<ExtArgs>
      likes: Prisma.$likesPayload<ExtArgs>[]
      parent: Prisma.$postsPayload<ExtArgs> | null
      replies: Prisma.$postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      text: string | null
      createdAt: Date
      likedByUser: boolean
      parentId: number | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poster<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends posts$parentArgs<ExtArgs> = {}>(args?: Subset<T, posts$parentArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends posts$repliesArgs<ExtArgs> = {}>(args?: Subset<T, posts$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'Int'>
    readonly userid: FieldRef<"posts", 'Int'>
    readonly text: FieldRef<"posts", 'String'>
    readonly createdAt: FieldRef<"posts", 'DateTime'>
    readonly likedByUser: FieldRef<"posts", 'Boolean'>
    readonly parentId: FieldRef<"posts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.likes
   */
  export type posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * posts.parent
   */
  export type posts$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * posts.replies
   */
  export type posts$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    postid: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    userid: number | null
    postid: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    userid: number | null
    postid: number | null
    createdAt: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    postid: number | null
    createdAt: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    userid: number
    postid: number
    createdAt: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    userid?: true
    postid?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    userid?: true
    postid?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    userid?: true
    postid?: true
    createdAt?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    userid?: true
    postid?: true
    createdAt?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    userid?: true
    postid?: true
    createdAt?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    userid: number
    postid: number
    createdAt: Date
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    postid?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    postid?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    postid?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    id?: boolean
    userid?: boolean
    postid?: boolean
    createdAt?: boolean
  }

  export type likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "postid" | "createdAt", ExtArgs["result"]["likes"]>
  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }

  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      post: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      postid: number
      createdAt: Date
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likesFindUniqueArgs>(args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs>(args: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likesFindFirstArgs>(args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs>(args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likesFindManyArgs>(args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends likesCreateArgs>(args: SelectSubset<T, likesCreateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likesCreateManyArgs>(args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likesCreateManyAndReturnArgs>(args?: SelectSubset<T, likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends likesDeleteArgs>(args: SelectSubset<T, likesDeleteArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likesUpdateArgs>(args: SelectSubset<T, likesUpdateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likesDeleteManyArgs>(args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likesUpdateManyArgs>(args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends likesUpdateManyAndReturnArgs>(args: SelectSubset<T, likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends likesUpsertArgs>(args: SelectSubset<T, likesUpsertArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the likes model
   */
  interface likesFieldRefs {
    readonly id: FieldRef<"likes", 'Int'>
    readonly userid: FieldRef<"likes", 'Int'>
    readonly postid: FieldRef<"likes", 'Int'>
    readonly createdAt: FieldRef<"likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data: XOR<likesCreateInput, likesUncheckedCreateInput>
  }

  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * likes createManyAndReturn
   */
  export type likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * likes updateManyAndReturn
   */
  export type likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }

  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    userid: 'userid',
    bio: 'bio'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    text: 'text',
    createdAt: 'createdAt',
    likedByUser: 'likedByUser',
    parentId: 'parentId'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    postid: 'postid',
    createdAt: 'createdAt'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    profile?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    posts?: PostsListRelationFilter
    likes?: LikesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    profile?: profilesOrderByWithRelationInput
    posts?: postsOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    profile?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    posts?: PostsListRelationFilter
    likes?: LikesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    userid?: IntFilter<"profiles"> | number
    bio?: StringNullableFilter<"profiles"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type profilesOrderByWithRelationInput = {
    userid?: SortOrder
    bio?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    userid?: number
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    bio?: StringNullableFilter<"profiles"> | string | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "userid">

  export type profilesOrderByWithAggregationInput = {
    userid?: SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: profilesCountOrderByAggregateInput
    _avg?: profilesAvgOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
    _sum?: profilesSumOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    userid?: IntWithAggregatesFilter<"profiles"> | number
    bio?: StringNullableWithAggregatesFilter<"profiles"> | string | null
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: IntFilter<"posts"> | number
    userid?: IntFilter<"posts"> | number
    text?: StringNullableFilter<"posts"> | string | null
    createdAt?: DateTimeFilter<"posts"> | Date | string
    likedByUser?: BoolFilter<"posts"> | boolean
    parentId?: IntNullableFilter<"posts"> | number | null
    poster?: XOR<UsersScalarRelationFilter, usersWhereInput>
    likes?: LikesListRelationFilter
    parent?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    replies?: PostsListRelationFilter
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    text?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    likedByUser?: SortOrder
    parentId?: SortOrderInput | SortOrder
    poster?: usersOrderByWithRelationInput
    likes?: likesOrderByRelationAggregateInput
    parent?: postsOrderByWithRelationInput
    replies?: postsOrderByRelationAggregateInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    userid?: IntFilter<"posts"> | number
    text?: StringNullableFilter<"posts"> | string | null
    createdAt?: DateTimeFilter<"posts"> | Date | string
    likedByUser?: BoolFilter<"posts"> | boolean
    parentId?: IntNullableFilter<"posts"> | number | null
    poster?: XOR<UsersScalarRelationFilter, usersWhereInput>
    likes?: LikesListRelationFilter
    parent?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    replies?: PostsListRelationFilter
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    text?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    likedByUser?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posts"> | number
    userid?: IntWithAggregatesFilter<"posts"> | number
    text?: StringNullableWithAggregatesFilter<"posts"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    likedByUser?: BoolWithAggregatesFilter<"posts"> | boolean
    parentId?: IntNullableWithAggregatesFilter<"posts"> | number | null
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    id?: IntFilter<"likes"> | number
    userid?: IntFilter<"likes"> | number
    postid?: IntFilter<"likes"> | number
    createdAt?: DateTimeFilter<"likes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }

  export type likesOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
    post?: postsOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userid_postid?: likesUseridPostidCompoundUniqueInput
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    userid?: IntFilter<"likes"> | number
    postid?: IntFilter<"likes"> | number
    createdAt?: DateTimeFilter<"likes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }, "id" | "userid_postid">

  export type likesOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
    createdAt?: SortOrder
    _count?: likesCountOrderByAggregateInput
    _avg?: likesAvgOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
    _sum?: likesSumOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"likes"> | number
    userid?: IntWithAggregatesFilter<"likes"> | number
    postid?: IntWithAggregatesFilter<"likes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"likes"> | Date | string
  }

  export type usersCreateInput = {
    email: string
    name: string
    password: string
    createdAt?: Date | string
    profile?: profilesCreateNestedOneWithoutUserInput
    posts?: postsCreateNestedManyWithoutPosterInput
    likes?: likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    password: string
    createdAt?: Date | string
    profile?: profilesUncheckedCreateNestedOneWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutPosterInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUpdateOneWithoutUserNestedInput
    posts?: postsUpdateManyWithoutPosterNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUncheckedUpdateOneWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutPosterNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    name: string
    password: string
    createdAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profilesCreateInput = {
    bio?: string | null
    user: usersCreateNestedOneWithoutProfileInput
  }

  export type profilesUncheckedCreateInput = {
    userid: number
    bio?: string | null
  }

  export type profilesUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutProfileNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    userid?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesCreateManyInput = {
    userid: number
    bio?: string | null
  }

  export type profilesUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    userid?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postsCreateInput = {
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    poster: usersCreateNestedOneWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostInput
    parent?: postsCreateNestedOneWithoutRepliesInput
    replies?: postsCreateNestedManyWithoutParentInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    userid: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    parentId?: number | null
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    replies?: postsUncheckedCreateNestedManyWithoutParentInput
  }

  export type postsUpdateInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    poster?: usersUpdateOneRequiredWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    parent?: postsUpdateOneWithoutRepliesNestedInput
    replies?: postsUpdateManyWithoutParentNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    replies?: postsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type postsCreateManyInput = {
    id?: number
    userid: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    parentId?: number | null
  }

  export type postsUpdateManyMutationInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type likesCreateInput = {
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutLikesInput
    post: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    id?: number
    userid: number
    postid: number
    createdAt?: Date | string
  }

  export type likesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLikesNestedInput
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    postid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesCreateManyInput = {
    id?: number
    userid: number
    postid: number
    createdAt?: Date | string
  }

  export type likesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    postid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: profilesWhereInput | null
    isNot?: profilesWhereInput | null
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type profilesCountOrderByAggregateInput = {
    userid?: SortOrder
    bio?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    userid?: SortOrder
    bio?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    userid?: SortOrder
    bio?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    userid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PostsNullableScalarRelationFilter = {
    is?: postsWhereInput | null
    isNot?: postsWhereInput | null
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    likedByUser?: SortOrder
    parentId?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    parentId?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    likedByUser?: SortOrder
    parentId?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    likedByUser?: SortOrder
    parentId?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    parentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type likesUseridPostidCompoundUniqueInput = {
    userid: number
    postid: number
  }

  export type likesCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
    createdAt?: SortOrder
  }

  export type likesAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
    createdAt?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
    createdAt?: SortOrder
  }

  export type likesSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    postid?: SortOrder
  }

  export type profilesCreateNestedOneWithoutUserInput = {
    create?: XOR<profilesCreateWithoutUserInput, profilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUserInput
    connect?: profilesWhereUniqueInput
  }

  export type postsCreateNestedManyWithoutPosterInput = {
    create?: XOR<postsCreateWithoutPosterInput, postsUncheckedCreateWithoutPosterInput> | postsCreateWithoutPosterInput[] | postsUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPosterInput | postsCreateOrConnectWithoutPosterInput[]
    createMany?: postsCreateManyPosterInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutUserInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type profilesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<profilesCreateWithoutUserInput, profilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUserInput
    connect?: profilesWhereUniqueInput
  }

  export type postsUncheckedCreateNestedManyWithoutPosterInput = {
    create?: XOR<postsCreateWithoutPosterInput, postsUncheckedCreateWithoutPosterInput> | postsCreateWithoutPosterInput[] | postsUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPosterInput | postsCreateOrConnectWithoutPosterInput[]
    createMany?: postsCreateManyPosterInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type profilesUpdateOneWithoutUserNestedInput = {
    create?: XOR<profilesCreateWithoutUserInput, profilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUserInput
    upsert?: profilesUpsertWithoutUserInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutUserInput, profilesUpdateWithoutUserInput>, profilesUncheckedUpdateWithoutUserInput>
  }

  export type postsUpdateManyWithoutPosterNestedInput = {
    create?: XOR<postsCreateWithoutPosterInput, postsUncheckedCreateWithoutPosterInput> | postsCreateWithoutPosterInput[] | postsUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPosterInput | postsCreateOrConnectWithoutPosterInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutPosterInput | postsUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: postsCreateManyPosterInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutPosterInput | postsUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: postsUpdateManyWithWhereWithoutPosterInput | postsUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type likesUpdateManyWithoutUserNestedInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUserInput | likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUserInput | likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUserInput | likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profilesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<profilesCreateWithoutUserInput, profilesUncheckedCreateWithoutUserInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUserInput
    upsert?: profilesUpsertWithoutUserInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutUserInput, profilesUpdateWithoutUserInput>, profilesUncheckedUpdateWithoutUserInput>
  }

  export type postsUncheckedUpdateManyWithoutPosterNestedInput = {
    create?: XOR<postsCreateWithoutPosterInput, postsUncheckedCreateWithoutPosterInput> | postsCreateWithoutPosterInput[] | postsUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: postsCreateOrConnectWithoutPosterInput | postsCreateOrConnectWithoutPosterInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutPosterInput | postsUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: postsCreateManyPosterInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutPosterInput | postsUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: postsUpdateManyWithWhereWithoutPosterInput | postsUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUserInput | likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUserInput | likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUserInput | likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutProfileInput = {
    create?: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfileInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfileInput
    upsert?: usersUpsertWithoutProfileInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProfileInput, usersUpdateWithoutProfileInput>, usersUncheckedUpdateWithoutProfileInput>
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type likesCreateNestedManyWithoutPostInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type postsCreateNestedOneWithoutRepliesInput = {
    create?: XOR<postsCreateWithoutRepliesInput, postsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: postsCreateOrConnectWithoutRepliesInput
    connect?: postsWhereUniqueInput
  }

  export type postsCreateNestedManyWithoutParentInput = {
    create?: XOR<postsCreateWithoutParentInput, postsUncheckedCreateWithoutParentInput> | postsCreateWithoutParentInput[] | postsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: postsCreateOrConnectWithoutParentInput | postsCreateOrConnectWithoutParentInput[]
    createMany?: postsCreateManyParentInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<postsCreateWithoutParentInput, postsUncheckedCreateWithoutParentInput> | postsCreateWithoutParentInput[] | postsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: postsCreateOrConnectWithoutParentInput | postsCreateOrConnectWithoutParentInput[]
    createMany?: postsCreateManyParentInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type likesUpdateManyWithoutPostNestedInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostInput | likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostInput | likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostInput | likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type postsUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<postsCreateWithoutRepliesInput, postsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: postsCreateOrConnectWithoutRepliesInput
    upsert?: postsUpsertWithoutRepliesInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutRepliesInput, postsUpdateWithoutRepliesInput>, postsUncheckedUpdateWithoutRepliesInput>
  }

  export type postsUpdateManyWithoutParentNestedInput = {
    create?: XOR<postsCreateWithoutParentInput, postsUncheckedCreateWithoutParentInput> | postsCreateWithoutParentInput[] | postsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: postsCreateOrConnectWithoutParentInput | postsCreateOrConnectWithoutParentInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutParentInput | postsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: postsCreateManyParentInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutParentInput | postsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: postsUpdateManyWithWhereWithoutParentInput | postsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type likesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostInput | likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostInput | likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostInput | likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<postsCreateWithoutParentInput, postsUncheckedCreateWithoutParentInput> | postsCreateWithoutParentInput[] | postsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: postsCreateOrConnectWithoutParentInput | postsCreateOrConnectWithoutParentInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutParentInput | postsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: postsCreateManyParentInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutParentInput | postsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: postsUpdateManyWithWhereWithoutParentInput | postsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutLikesInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    connect?: postsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    upsert?: usersUpsertWithoutLikesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLikesInput, usersUpdateWithoutLikesInput>, usersUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    upsert?: postsUpsertWithoutLikesInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutLikesInput, postsUpdateWithoutLikesInput>, postsUncheckedUpdateWithoutLikesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type profilesCreateWithoutUserInput = {
    bio?: string | null
  }

  export type profilesUncheckedCreateWithoutUserInput = {
    bio?: string | null
  }

  export type profilesCreateOrConnectWithoutUserInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutUserInput, profilesUncheckedCreateWithoutUserInput>
  }

  export type postsCreateWithoutPosterInput = {
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    likes?: likesCreateNestedManyWithoutPostInput
    parent?: postsCreateNestedOneWithoutRepliesInput
    replies?: postsCreateNestedManyWithoutParentInput
  }

  export type postsUncheckedCreateWithoutPosterInput = {
    id?: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    parentId?: number | null
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    replies?: postsUncheckedCreateNestedManyWithoutParentInput
  }

  export type postsCreateOrConnectWithoutPosterInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPosterInput, postsUncheckedCreateWithoutPosterInput>
  }

  export type postsCreateManyPosterInputEnvelope = {
    data: postsCreateManyPosterInput | postsCreateManyPosterInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutUserInput = {
    createdAt?: Date | string
    post: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutUserInput = {
    id?: number
    postid: number
    createdAt?: Date | string
  }

  export type likesCreateOrConnectWithoutUserInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput>
  }

  export type likesCreateManyUserInputEnvelope = {
    data: likesCreateManyUserInput | likesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type profilesUpsertWithoutUserInput = {
    update: XOR<profilesUpdateWithoutUserInput, profilesUncheckedUpdateWithoutUserInput>
    create: XOR<profilesCreateWithoutUserInput, profilesUncheckedCreateWithoutUserInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutUserInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutUserInput, profilesUncheckedUpdateWithoutUserInput>
  }

  export type profilesUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postsUpsertWithWhereUniqueWithoutPosterInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutPosterInput, postsUncheckedUpdateWithoutPosterInput>
    create: XOR<postsCreateWithoutPosterInput, postsUncheckedCreateWithoutPosterInput>
  }

  export type postsUpdateWithWhereUniqueWithoutPosterInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutPosterInput, postsUncheckedUpdateWithoutPosterInput>
  }

  export type postsUpdateManyWithWhereWithoutPosterInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutPosterInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: IntFilter<"posts"> | number
    userid?: IntFilter<"posts"> | number
    text?: StringNullableFilter<"posts"> | string | null
    createdAt?: DateTimeFilter<"posts"> | Date | string
    likedByUser?: BoolFilter<"posts"> | boolean
    parentId?: IntNullableFilter<"posts"> | number | null
  }

  export type likesUpsertWithWhereUniqueWithoutUserInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutUserInput, likesUncheckedUpdateWithoutUserInput>
    create: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput>
  }

  export type likesUpdateWithWhereUniqueWithoutUserInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutUserInput, likesUncheckedUpdateWithoutUserInput>
  }

  export type likesUpdateManyWithWhereWithoutUserInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutUserInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    id?: IntFilter<"likes"> | number
    userid?: IntFilter<"likes"> | number
    postid?: IntFilter<"likes"> | number
    createdAt?: DateTimeFilter<"likes"> | Date | string
  }

  export type usersCreateWithoutProfileInput = {
    email: string
    name: string
    password: string
    createdAt?: Date | string
    posts?: postsCreateNestedManyWithoutPosterInput
    likes?: likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    name: string
    password: string
    createdAt?: Date | string
    posts?: postsUncheckedCreateNestedManyWithoutPosterInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProfileInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
  }

  export type usersUpsertWithoutProfileInput = {
    update: XOR<usersUpdateWithoutProfileInput, usersUncheckedUpdateWithoutProfileInput>
    create: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProfileInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProfileInput, usersUncheckedUpdateWithoutProfileInput>
  }

  export type usersUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUpdateManyWithoutPosterNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: postsUncheckedUpdateManyWithoutPosterNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutPostsInput = {
    email: string
    name: string
    password: string
    createdAt?: Date | string
    profile?: profilesCreateNestedOneWithoutUserInput
    likes?: likesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name: string
    password: string
    createdAt?: Date | string
    profile?: profilesUncheckedCreateNestedOneWithoutUserInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type likesCreateWithoutPostInput = {
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutPostInput = {
    id?: number
    userid: number
    createdAt?: Date | string
  }

  export type likesCreateOrConnectWithoutPostInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput>
  }

  export type likesCreateManyPostInputEnvelope = {
    data: likesCreateManyPostInput | likesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutRepliesInput = {
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    poster: usersCreateNestedOneWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostInput
    parent?: postsCreateNestedOneWithoutRepliesInput
  }

  export type postsUncheckedCreateWithoutRepliesInput = {
    id?: number
    userid: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    parentId?: number | null
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutRepliesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutRepliesInput, postsUncheckedCreateWithoutRepliesInput>
  }

  export type postsCreateWithoutParentInput = {
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    poster: usersCreateNestedOneWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostInput
    replies?: postsCreateNestedManyWithoutParentInput
  }

  export type postsUncheckedCreateWithoutParentInput = {
    id?: number
    userid: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    replies?: postsUncheckedCreateNestedManyWithoutParentInput
  }

  export type postsCreateOrConnectWithoutParentInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutParentInput, postsUncheckedCreateWithoutParentInput>
  }

  export type postsCreateManyParentInputEnvelope = {
    data: postsCreateManyParentInput | postsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUpdateOneWithoutUserNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUncheckedUpdateOneWithoutUserNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type likesUpsertWithWhereUniqueWithoutPostInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutPostInput, likesUncheckedUpdateWithoutPostInput>
    create: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput>
  }

  export type likesUpdateWithWhereUniqueWithoutPostInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutPostInput, likesUncheckedUpdateWithoutPostInput>
  }

  export type likesUpdateManyWithWhereWithoutPostInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutPostInput>
  }

  export type postsUpsertWithoutRepliesInput = {
    update: XOR<postsUpdateWithoutRepliesInput, postsUncheckedUpdateWithoutRepliesInput>
    create: XOR<postsCreateWithoutRepliesInput, postsUncheckedCreateWithoutRepliesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutRepliesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutRepliesInput, postsUncheckedUpdateWithoutRepliesInput>
  }

  export type postsUpdateWithoutRepliesInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    poster?: usersUpdateOneRequiredWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    parent?: postsUpdateOneWithoutRepliesNestedInput
  }

  export type postsUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsUpsertWithWhereUniqueWithoutParentInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutParentInput, postsUncheckedUpdateWithoutParentInput>
    create: XOR<postsCreateWithoutParentInput, postsUncheckedCreateWithoutParentInput>
  }

  export type postsUpdateWithWhereUniqueWithoutParentInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutParentInput, postsUncheckedUpdateWithoutParentInput>
  }

  export type postsUpdateManyWithWhereWithoutParentInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutParentInput>
  }

  export type usersCreateWithoutLikesInput = {
    email: string
    name: string
    password: string
    createdAt?: Date | string
    profile?: profilesCreateNestedOneWithoutUserInput
    posts?: postsCreateNestedManyWithoutPosterInput
  }

  export type usersUncheckedCreateWithoutLikesInput = {
    id?: number
    email: string
    name: string
    password: string
    createdAt?: Date | string
    profile?: profilesUncheckedCreateNestedOneWithoutUserInput
    posts?: postsUncheckedCreateNestedManyWithoutPosterInput
  }

  export type usersCreateOrConnectWithoutLikesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
  }

  export type postsCreateWithoutLikesInput = {
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    poster: usersCreateNestedOneWithoutPostsInput
    parent?: postsCreateNestedOneWithoutRepliesInput
    replies?: postsCreateNestedManyWithoutParentInput
  }

  export type postsUncheckedCreateWithoutLikesInput = {
    id?: number
    userid: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    parentId?: number | null
    replies?: postsUncheckedCreateNestedManyWithoutParentInput
  }

  export type postsCreateOrConnectWithoutLikesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
  }

  export type usersUpsertWithoutLikesInput = {
    update: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateWithoutLikesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUpdateOneWithoutUserNestedInput
    posts?: postsUpdateManyWithoutPosterNestedInput
  }

  export type usersUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profilesUncheckedUpdateOneWithoutUserNestedInput
    posts?: postsUncheckedUpdateManyWithoutPosterNestedInput
  }

  export type postsUpsertWithoutLikesInput = {
    update: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutLikesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateWithoutLikesInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    poster?: usersUpdateOneRequiredWithoutPostsNestedInput
    parent?: postsUpdateOneWithoutRepliesNestedInput
    replies?: postsUpdateManyWithoutParentNestedInput
  }

  export type postsUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: postsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type postsCreateManyPosterInput = {
    id?: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
    parentId?: number | null
  }

  export type likesCreateManyUserInput = {
    id?: number
    postid: number
    createdAt?: Date | string
  }

  export type postsUpdateWithoutPosterInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    likes?: likesUpdateManyWithoutPostNestedInput
    parent?: postsUpdateOneWithoutRepliesNestedInput
    replies?: postsUpdateManyWithoutParentNestedInput
  }

  export type postsUncheckedUpdateWithoutPosterInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    replies?: postsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type postsUncheckedUpdateManyWithoutPosterInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type likesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesCreateManyPostInput = {
    id?: number
    userid: number
    createdAt?: Date | string
  }

  export type postsCreateManyParentInput = {
    id?: number
    userid: number
    text?: string | null
    createdAt?: Date | string
    likedByUser?: boolean
  }

  export type likesUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUpdateWithoutParentInput = {
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    poster?: usersUpdateOneRequiredWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    replies?: postsUpdateManyWithoutParentNestedInput
  }

  export type postsUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    replies?: postsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type postsUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedByUser?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}