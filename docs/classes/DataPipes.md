[**datapipes v0.1.0**](../README.md) • **Docs**

***

[datapipes v0.1.0](../globals.md) / DataPipes

# Class: DataPipes

## Constructors

### new DataPipes()

> **new DataPipes**(`container`, `width`, `height`, `callBack`): [`DataPipes`](DataPipes.md)

#### Parameters

• **container**: `HTMLElement`

• **width**: `number`

• **height**: `number`

• **callBack**: `null` \| `string` \| (`result`) => `void` = `null`

#### Returns

[`DataPipes`](DataPipes.md)

#### Defined in

[DataPipes.ts:53](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L53)

## Methods

### addEdge()

> **addEdge**(`config`): `string`

#### Parameters

• **config**: [`EdgeConfig`](../interfaces/EdgeConfig.md)

#### Returns

`string`

#### Defined in

[DataPipes.ts:112](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L112)

***

### addNode()

> **addNode**(`config`): `string`

#### Parameters

• **config**: [`NodeConfig`](../interfaces/NodeConfig.md)

#### Returns

`string`

#### Defined in

[DataPipes.ts:95](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L95)

***

### center()

> **center**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:191](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L191)

***

### getEdges()

> **getEdges**(): [`EdgeConfig`](../interfaces/EdgeConfig.md)[]

#### Returns

[`EdgeConfig`](../interfaces/EdgeConfig.md)[]

#### Defined in

[DataPipes.ts:139](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L139)

***

### getNodes()

> **getNodes**(): [`NodeConfig`](../interfaces/NodeConfig.md)[]

#### Returns

[`NodeConfig`](../interfaces/NodeConfig.md)[]

#### Defined in

[DataPipes.ts:136](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L136)

***

### getWrapper()

> **getWrapper**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[DataPipes.ts:91](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L91)

***

### modifyEdgeStyle()

> **modifyEdgeStyle**(`id`, `newStyles`): `void`

#### Parameters

• **id**: `string`

• **newStyles**: `Partial`\<[`EdgeConfig`](../interfaces/EdgeConfig.md)\>

#### Returns

`void`

#### Defined in

[DataPipes.ts:152](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L152)

***

### modifyNodeStyle()

> **modifyNodeStyle**(`id`, `newStyles`): `void`

#### Parameters

• **id**: `string`

• **newStyles**: `Partial`\<[`NodeConfig`](../interfaces/NodeConfig.md)\>

#### Returns

`void`

#### Defined in

[DataPipes.ts:144](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L144)

***

### pan()

> **pan**(`dx`, `dy`): `void`

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Defined in

[DataPipes.ts:171](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L171)

***

### removeEdge()

> **removeEdge**(`from`, `to`): `void`

#### Parameters

• **from**: `string`

• **to**: `string`

#### Returns

`void`

#### Defined in

[DataPipes.ts:131](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L131)

***

### removeNode()

> **removeNode**(`id`): `void`

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

[DataPipes.ts:125](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L125)

***

### resetView()

> **resetView**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:177](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L177)

***

### zoomin()

> **zoomin**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:159](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L159)

***

### zoomout()

> **zoomout**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:165](https://github.com/digital-codes/dataPipes/blob/0cd7d4b058b5dfdc33d6734fe3c6ebb13dd3d0f5/src/DataPipes.ts#L165)
