# KnowledgeFilesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**user_id** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**access_control** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**created_at** | **number** |  | [default to undefined]
**updated_at** | **number** |  | [default to undefined]
**files** | [**Array&lt;FileMetadataResponse&gt;**](FileMetadataResponse.md) |  | [default to undefined]

## Example

```typescript
import { KnowledgeFilesResponse } from './api';

const instance: KnowledgeFilesResponse = {
    id,
    user_id,
    name,
    description,
    data,
    meta,
    access_control,
    created_at,
    updated_at,
    files,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
