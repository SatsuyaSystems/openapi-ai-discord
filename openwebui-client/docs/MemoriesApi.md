# MemoriesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMemoryApiV1MemoriesAddPost**](#addmemoryapiv1memoriesaddpost) | **POST** /api/v1/memories/add | Add Memory|
|[**deleteMemoryByIdApiV1MemoriesMemoryIdDelete**](#deletememorybyidapiv1memoriesmemoryiddelete) | **DELETE** /api/v1/memories/{memory_id} | Delete Memory By Id|
|[**deleteMemoryByUserIdApiV1MemoriesDeleteUserDelete**](#deletememorybyuseridapiv1memoriesdeleteuserdelete) | **DELETE** /api/v1/memories/delete/user | Delete Memory By User Id|
|[**getEmbeddingsApiV1MemoriesEfGet**](#getembeddingsapiv1memoriesefget) | **GET** /api/v1/memories/ef | Get Embeddings|
|[**getMemoriesApiV1MemoriesGet**](#getmemoriesapiv1memoriesget) | **GET** /api/v1/memories/ | Get Memories|
|[**queryMemoryApiV1MemoriesQueryPost**](#querymemoryapiv1memoriesquerypost) | **POST** /api/v1/memories/query | Query Memory|
|[**resetMemoryFromVectorDbApiV1MemoriesResetPost**](#resetmemoryfromvectordbapiv1memoriesresetpost) | **POST** /api/v1/memories/reset | Reset Memory From Vector Db|
|[**updateMemoryByIdApiV1MemoriesMemoryIdUpdatePost**](#updatememorybyidapiv1memoriesmemoryidupdatepost) | **POST** /api/v1/memories/{memory_id}/update | Update Memory By Id|

# **addMemoryApiV1MemoriesAddPost**
> MemoryModel addMemoryApiV1MemoriesAddPost(addMemoryForm)


### Example

```typescript
import {
    MemoriesApi,
    Configuration,
    AddMemoryForm
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

let addMemoryForm: AddMemoryForm; //

const { status, data } = await apiInstance.addMemoryApiV1MemoriesAddPost(
    addMemoryForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addMemoryForm** | **AddMemoryForm**|  | |


### Return type

**MemoryModel**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMemoryByIdApiV1MemoriesMemoryIdDelete**
> boolean deleteMemoryByIdApiV1MemoriesMemoryIdDelete()


### Example

```typescript
import {
    MemoriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

let memoryId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteMemoryByIdApiV1MemoriesMemoryIdDelete(
    memoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memoryId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMemoryByUserIdApiV1MemoriesDeleteUserDelete**
> boolean deleteMemoryByUserIdApiV1MemoriesDeleteUserDelete()


### Example

```typescript
import {
    MemoriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

const { status, data } = await apiInstance.deleteMemoryByUserIdApiV1MemoriesDeleteUserDelete();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**boolean**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEmbeddingsApiV1MemoriesEfGet**
> any getEmbeddingsApiV1MemoriesEfGet()


### Example

```typescript
import {
    MemoriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

const { status, data } = await apiInstance.getEmbeddingsApiV1MemoriesEfGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMemoriesApiV1MemoriesGet**
> Array<MemoryModel> getMemoriesApiV1MemoriesGet()


### Example

```typescript
import {
    MemoriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

const { status, data } = await apiInstance.getMemoriesApiV1MemoriesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MemoryModel>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryMemoryApiV1MemoriesQueryPost**
> any queryMemoryApiV1MemoriesQueryPost(queryMemoryForm)


### Example

```typescript
import {
    MemoriesApi,
    Configuration,
    QueryMemoryForm
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

let queryMemoryForm: QueryMemoryForm; //

const { status, data } = await apiInstance.queryMemoryApiV1MemoriesQueryPost(
    queryMemoryForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryMemoryForm** | **QueryMemoryForm**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetMemoryFromVectorDbApiV1MemoriesResetPost**
> boolean resetMemoryFromVectorDbApiV1MemoriesResetPost()


### Example

```typescript
import {
    MemoriesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

const { status, data } = await apiInstance.resetMemoryFromVectorDbApiV1MemoriesResetPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**boolean**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMemoryByIdApiV1MemoriesMemoryIdUpdatePost**
> MemoryModel updateMemoryByIdApiV1MemoriesMemoryIdUpdatePost(memoryUpdateModel)


### Example

```typescript
import {
    MemoriesApi,
    Configuration,
    MemoryUpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new MemoriesApi(configuration);

let memoryId: string; // (default to undefined)
let memoryUpdateModel: MemoryUpdateModel; //

const { status, data } = await apiInstance.updateMemoryByIdApiV1MemoriesMemoryIdUpdatePost(
    memoryId,
    memoryUpdateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **memoryUpdateModel** | **MemoryUpdateModel**|  | |
| **memoryId** | [**string**] |  | defaults to undefined|


### Return type

**MemoryModel**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

