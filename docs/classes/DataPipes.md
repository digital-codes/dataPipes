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

[DataPipes.ts:48](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L48)

## Methods

### addEdge()

> **addEdge**(`config`): `string`

#### Parameters

• **config**: [`EdgeConfig`](../interfaces/EdgeConfig.md)

#### Returns

`string`

#### Defined in

[DataPipes.ts:102](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L102)

***

### addNode()

> **addNode**(`config`): `string`

#### Parameters

• **config**: [`NodeConfig`](../interfaces/NodeConfig.md)

#### Returns

`string`

#### Defined in

[DataPipes.ts:90](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L90)

***

### center()

> **center**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:179](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L179)

***

### getEdges()

> **getEdges**(): [`EdgeConfig`](../interfaces/EdgeConfig.md)[]

#### Returns

[`EdgeConfig`](../interfaces/EdgeConfig.md)[]

#### Defined in

[DataPipes.ts:129](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L129)

***

### getNodes()

> **getNodes**(): [`NodeConfig`](../interfaces/NodeConfig.md)[]

#### Returns

[`NodeConfig`](../interfaces/NodeConfig.md)[]

#### Defined in

[DataPipes.ts:126](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L126)

***

### getWrapper()

> **getWrapper**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[DataPipes.ts:86](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L86)

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

[DataPipes.ts:140](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L140)

***

### modifyNodeStyle()

> **modifyNodeStyle**(`id`, `newStyles`): `void`

#### Parameters

• **id**: `string`

• **newStyles**: `Partial`\<[`NodeConfig`](../interfaces/NodeConfig.md)\>

#### Returns

`void`

#### Defined in

[DataPipes.ts:134](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L134)

***

### pan()

> **pan**(`dx`, `dy`): `void`

#### Parameters

• **dx**: `number`

• **dy**: `number`

#### Returns

`void`

#### Defined in

[DataPipes.ts:159](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L159)

***

### removeEdge()

> **removeEdge**(`from`, `to`): `void`

#### Parameters

• **from**: `string`

• **to**: `string`

#### Returns

`void`

#### Defined in

[DataPipes.ts:121](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L121)

***

### removeNode()

> **removeNode**(`id`): `void`

#### Parameters

• **id**: `string`

#### Returns

`void`

#### Defined in

[DataPipes.ts:115](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L115)

***

### resetView()

> **resetView**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:165](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L165)

***

### zoomin()

> **zoomin**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:147](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L147)

***

### zoomout()

> **zoomout**(): `void`

#### Returns

`void`

#### Defined in

[DataPipes.ts:153](https://github.com/digital-codes/dataPipes/blob/bb02752113d5d2b20ba2616866c6bee78f0dedc7/src/DataPipes.ts#L153)
