[**datapipes v0.1.0**](../README.md)

***

[datapipes](../globals.md) / DataPipes

# Class: DataPipes

Defined in: [DataPipes.ts:25](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L25)

## Constructors

### Constructor

> **new DataPipes**(`container`, `width`, `height`, `callBack`): `DataPipes`

Defined in: [DataPipes.ts:53](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L53)

#### Parameters

##### container

`HTMLElement`

##### width

`number`

##### height

`number`

##### callBack

`null` | `string` | (`result`) => `void`

#### Returns

`DataPipes`

## Methods

### addEdge()

> **addEdge**(`config`): `string`

Defined in: [DataPipes.ts:112](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L112)

#### Parameters

##### config

[`EdgeConfig`](../interfaces/EdgeConfig.md)

#### Returns

`string`

***

### addNode()

> **addNode**(`config`): `string`

Defined in: [DataPipes.ts:95](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L95)

#### Parameters

##### config

[`NodeConfig`](../interfaces/NodeConfig.md)

#### Returns

`string`

***

### center()

> **center**(): `void`

Defined in: [DataPipes.ts:191](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L191)

#### Returns

`void`

***

### getEdges()

> **getEdges**(): [`EdgeConfig`](../interfaces/EdgeConfig.md)[]

Defined in: [DataPipes.ts:139](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L139)

#### Returns

[`EdgeConfig`](../interfaces/EdgeConfig.md)[]

***

### getNodes()

> **getNodes**(): [`NodeConfig`](../interfaces/NodeConfig.md)[]

Defined in: [DataPipes.ts:136](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L136)

#### Returns

[`NodeConfig`](../interfaces/NodeConfig.md)[]

***

### getWrapper()

> **getWrapper**(): `HTMLElement`

Defined in: [DataPipes.ts:91](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L91)

#### Returns

`HTMLElement`

***

### modifyEdgeStyle()

> **modifyEdgeStyle**(`id`, `newStyles`): `void`

Defined in: [DataPipes.ts:152](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L152)

#### Parameters

##### id

`string`

##### newStyles

`Partial`\<[`EdgeConfig`](../interfaces/EdgeConfig.md)\>

#### Returns

`void`

***

### modifyNodeStyle()

> **modifyNodeStyle**(`id`, `newStyles`): `void`

Defined in: [DataPipes.ts:144](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L144)

#### Parameters

##### id

`string`

##### newStyles

`Partial`\<[`NodeConfig`](../interfaces/NodeConfig.md)\>

#### Returns

`void`

***

### pan()

> **pan**(`dx`, `dy`): `void`

Defined in: [DataPipes.ts:171](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L171)

#### Parameters

##### dx

`number`

##### dy

`number`

#### Returns

`void`

***

### removeEdge()

> **removeEdge**(`from`, `to`): `void`

Defined in: [DataPipes.ts:131](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L131)

#### Parameters

##### from

`string`

##### to

`string`

#### Returns

`void`

***

### removeNode()

> **removeNode**(`id`): `void`

Defined in: [DataPipes.ts:125](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L125)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### resetView()

> **resetView**(): `void`

Defined in: [DataPipes.ts:177](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L177)

#### Returns

`void`

***

### zoomin()

> **zoomin**(): `void`

Defined in: [DataPipes.ts:159](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L159)

#### Returns

`void`

***

### zoomout()

> **zoomout**(): `void`

Defined in: [DataPipes.ts:165](https://github.com/digital-codes/dataPipes/blob/1d7f6836cd0cf4a3a11ee416391b12745abaec7a/src/DataPipes.ts#L165)

#### Returns

`void`
