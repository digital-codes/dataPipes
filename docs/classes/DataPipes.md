[**datapipes v0.1.0**](../README.md) • **Docs**

***

[datapipes v0.1.0](../globals.md) / DataPipes

# Class: DataPipes

## Constructors

### new DataPipes()

> **new DataPipes**(`container`, `width`, `height`): [`DataPipes`](DataPipes.md)

#### Parameters

• **container**: `HTMLElement`

• **width**: `number`

• **height**: `number`

#### Returns

[`DataPipes`](DataPipes.md)

#### Defined in

[DataPipes.ts:47](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L47)

## Methods

### addEdge()

> **addEdge**(`config`): `string`

#### Parameters

• **config**: [`EdgeConfig`](../interfaces/EdgeConfig.md)

#### Returns

`string`

#### Defined in

[DataPipes.ts:82](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L82)

***

### addNode()

> **addNode**(`config`): `string`

#### Parameters

• **config**: [`NodeConfig`](../interfaces/NodeConfig.md)

#### Returns

`string`

#### Defined in

[DataPipes.ts:70](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L70)

***

### center()

> **center**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:159](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L159)

***

### getEdges()

> **getEdges**(): [`EdgeConfig`](../interfaces/EdgeConfig.md)[]

#### Returns

[`EdgeConfig`](../interfaces/EdgeConfig.md)[]

#### Defined in

[DataPipes.ts:109](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L109)

***

### getNodes()

> **getNodes**(): [`NodeConfig`](../interfaces/NodeConfig.md)[]

#### Returns

[`NodeConfig`](../interfaces/NodeConfig.md)[]

#### Defined in

[DataPipes.ts:106](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L106)

***

### modifyEdgeStyle()

> **modifyEdgeStyle**(`from`, `to`, `newStyles`): `void`

#### Parameters

• **from**: `string`

• **to**: `string`

• **newStyles**: `Partial`\<[`EdgeConfig`](../interfaces/EdgeConfig.md)\>

#### Returns

`void`

#### Defined in

[DataPipes.ts:120](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L120)

***

### modifyNodeStyle()

> **modifyNodeStyle**(`id`, `newStyles`): `void`

#### Parameters

• **id**: `string`

• **newStyles**: `Partial`\<[`NodeConfig`](../interfaces/NodeConfig.md)\>

#### Returns

`void`

#### Defined in

[DataPipes.ts:114](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L114)

***

### pan()

> **pan**(`dx`, `dy`): `void`

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Defined in

[DataPipes.ts:139](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L139)

***

### removeEdge()

> **removeEdge**(`from`, `to`): `void`

#### Parameters

• **from**: `string`

• **to**: `string`

#### Returns

`void`

#### Defined in

[DataPipes.ts:101](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L101)

***

### removeNode()

> **removeNode**(`id`): `void`

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

[DataPipes.ts:95](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L95)

***

### resetView()

> **resetView**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:145](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L145)

***

### zoomin()

> **zoomin**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:127](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L127)

***

### zoomout()

> **zoomout**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:133](https://github.com/digital-codes/dataPipes/blob/8a12a403330cbb983f44e823368f767bb7b26bfd/src/DataPipes.ts#L133)
