# RetrievalApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteEntriesFromCollectionApiV1RetrievalDeletePost**](#deleteentriesfromcollectionapiv1retrievaldeletepost) | **POST** /api/v1/retrieval/delete | Delete Entries From Collection|
|[**getEmbeddingConfigApiV1RetrievalEmbeddingGet**](#getembeddingconfigapiv1retrievalembeddingget) | **GET** /api/v1/retrieval/embedding | Get Embedding Config|
|[**getEmbeddingsApiV1RetrievalEfTextGet**](#getembeddingsapiv1retrievaleftextget) | **GET** /api/v1/retrieval/ef/{text} | Get Embeddings|
|[**getRagConfigApiV1RetrievalConfigGet**](#getragconfigapiv1retrievalconfigget) | **GET** /api/v1/retrieval/config | Get Rag Config|
|[**getStatusApiV1RetrievalGet**](#getstatusapiv1retrievalget) | **GET** /api/v1/retrieval/ | Get Status|
|[**processFileApiV1RetrievalProcessFilePost**](#processfileapiv1retrievalprocessfilepost) | **POST** /api/v1/retrieval/process/file | Process File|
|[**processFilesBatchApiV1RetrievalProcessFilesBatchPost**](#processfilesbatchapiv1retrievalprocessfilesbatchpost) | **POST** /api/v1/retrieval/process/files/batch | Process Files Batch|
|[**processTextApiV1RetrievalProcessTextPost**](#processtextapiv1retrievalprocesstextpost) | **POST** /api/v1/retrieval/process/text | Process Text|
|[**processWebApiV1RetrievalProcessWebPost**](#processwebapiv1retrievalprocesswebpost) | **POST** /api/v1/retrieval/process/web | Process Web|
|[**processWebApiV1RetrievalProcessYoutubePost**](#processwebapiv1retrievalprocessyoutubepost) | **POST** /api/v1/retrieval/process/youtube | Process Web|
|[**processWebSearchApiV1RetrievalProcessWebSearchPost**](#processwebsearchapiv1retrievalprocesswebsearchpost) | **POST** /api/v1/retrieval/process/web/search | Process Web Search|
|[**queryCollectionHandlerApiV1RetrievalQueryCollectionPost**](#querycollectionhandlerapiv1retrievalquerycollectionpost) | **POST** /api/v1/retrieval/query/collection | Query Collection Handler|
|[**queryDocHandlerApiV1RetrievalQueryDocPost**](#querydochandlerapiv1retrievalquerydocpost) | **POST** /api/v1/retrieval/query/doc | Query Doc Handler|
|[**resetUploadDirApiV1RetrievalResetUploadsPost**](#resetuploaddirapiv1retrievalresetuploadspost) | **POST** /api/v1/retrieval/reset/uploads | Reset Upload Dir|
|[**resetVectorDbApiV1RetrievalResetDbPost**](#resetvectordbapiv1retrievalresetdbpost) | **POST** /api/v1/retrieval/reset/db | Reset Vector Db|
|[**updateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost**](#updateembeddingconfigapiv1retrievalembeddingupdatepost) | **POST** /api/v1/retrieval/embedding/update | Update Embedding Config|
|[**updateRagConfigApiV1RetrievalConfigUpdatePost**](#updateragconfigapiv1retrievalconfigupdatepost) | **POST** /api/v1/retrieval/config/update | Update Rag Config|

# **deleteEntriesFromCollectionApiV1RetrievalDeletePost**
> any deleteEntriesFromCollectionApiV1RetrievalDeletePost(deleteForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    DeleteForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let deleteForm: DeleteForm; //

const { status, data } = await apiInstance.deleteEntriesFromCollectionApiV1RetrievalDeletePost(
    deleteForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteForm** | **DeleteForm**|  | |


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

# **getEmbeddingConfigApiV1RetrievalEmbeddingGet**
> any getEmbeddingConfigApiV1RetrievalEmbeddingGet()


### Example

```typescript
import {
    RetrievalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

const { status, data } = await apiInstance.getEmbeddingConfigApiV1RetrievalEmbeddingGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

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

# **getEmbeddingsApiV1RetrievalEfTextGet**
> any getEmbeddingsApiV1RetrievalEfTextGet()


### Example

```typescript
import {
    RetrievalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let text: string; // (default to undefined)

const { status, data } = await apiInstance.getEmbeddingsApiV1RetrievalEfTextGet(
    text
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **text** | [**string**] |  | defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRagConfigApiV1RetrievalConfigGet**
> any getRagConfigApiV1RetrievalConfigGet()


### Example

```typescript
import {
    RetrievalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

const { status, data } = await apiInstance.getRagConfigApiV1RetrievalConfigGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

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

# **getStatusApiV1RetrievalGet**
> any getStatusApiV1RetrievalGet()


### Example

```typescript
import {
    RetrievalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

const { status, data } = await apiInstance.getStatusApiV1RetrievalGet();
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

# **processFileApiV1RetrievalProcessFilePost**
> any processFileApiV1RetrievalProcessFilePost(processFileForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    ProcessFileForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let processFileForm: ProcessFileForm; //

const { status, data } = await apiInstance.processFileApiV1RetrievalProcessFilePost(
    processFileForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **processFileForm** | **ProcessFileForm**|  | |


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

# **processFilesBatchApiV1RetrievalProcessFilesBatchPost**
> BatchProcessFilesResponse processFilesBatchApiV1RetrievalProcessFilesBatchPost(batchProcessFilesForm)

Process a batch of files and save them to the vector database.

### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    BatchProcessFilesForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let batchProcessFilesForm: BatchProcessFilesForm; //

const { status, data } = await apiInstance.processFilesBatchApiV1RetrievalProcessFilesBatchPost(
    batchProcessFilesForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchProcessFilesForm** | **BatchProcessFilesForm**|  | |


### Return type

**BatchProcessFilesResponse**

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

# **processTextApiV1RetrievalProcessTextPost**
> any processTextApiV1RetrievalProcessTextPost(processTextForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    ProcessTextForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let processTextForm: ProcessTextForm; //

const { status, data } = await apiInstance.processTextApiV1RetrievalProcessTextPost(
    processTextForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **processTextForm** | **ProcessTextForm**|  | |


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

# **processWebApiV1RetrievalProcessWebPost**
> any processWebApiV1RetrievalProcessWebPost(processUrlForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    ProcessUrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let processUrlForm: ProcessUrlForm; //

const { status, data } = await apiInstance.processWebApiV1RetrievalProcessWebPost(
    processUrlForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **processUrlForm** | **ProcessUrlForm**|  | |


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

# **processWebApiV1RetrievalProcessYoutubePost**
> any processWebApiV1RetrievalProcessYoutubePost(processUrlForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    ProcessUrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let processUrlForm: ProcessUrlForm; //

const { status, data } = await apiInstance.processWebApiV1RetrievalProcessYoutubePost(
    processUrlForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **processUrlForm** | **ProcessUrlForm**|  | |


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

# **processWebSearchApiV1RetrievalProcessWebSearchPost**
> any processWebSearchApiV1RetrievalProcessWebSearchPost(searchForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    SearchForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let searchForm: SearchForm; //

const { status, data } = await apiInstance.processWebSearchApiV1RetrievalProcessWebSearchPost(
    searchForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **searchForm** | **SearchForm**|  | |


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

# **queryCollectionHandlerApiV1RetrievalQueryCollectionPost**
> any queryCollectionHandlerApiV1RetrievalQueryCollectionPost(queryCollectionsForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    QueryCollectionsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let queryCollectionsForm: QueryCollectionsForm; //

const { status, data } = await apiInstance.queryCollectionHandlerApiV1RetrievalQueryCollectionPost(
    queryCollectionsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryCollectionsForm** | **QueryCollectionsForm**|  | |


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

# **queryDocHandlerApiV1RetrievalQueryDocPost**
> any queryDocHandlerApiV1RetrievalQueryDocPost(queryDocForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    QueryDocForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let queryDocForm: QueryDocForm; //

const { status, data } = await apiInstance.queryDocHandlerApiV1RetrievalQueryDocPost(
    queryDocForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryDocForm** | **QueryDocForm**|  | |


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

# **resetUploadDirApiV1RetrievalResetUploadsPost**
> boolean resetUploadDirApiV1RetrievalResetUploadsPost()


### Example

```typescript
import {
    RetrievalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

const { status, data } = await apiInstance.resetUploadDirApiV1RetrievalResetUploadsPost();
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

# **resetVectorDbApiV1RetrievalResetDbPost**
> any resetVectorDbApiV1RetrievalResetDbPost()


### Example

```typescript
import {
    RetrievalApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

const { status, data } = await apiInstance.resetVectorDbApiV1RetrievalResetDbPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

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

# **updateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost**
> any updateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost(embeddingModelUpdateForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    EmbeddingModelUpdateForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let embeddingModelUpdateForm: EmbeddingModelUpdateForm; //

const { status, data } = await apiInstance.updateEmbeddingConfigApiV1RetrievalEmbeddingUpdatePost(
    embeddingModelUpdateForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **embeddingModelUpdateForm** | **EmbeddingModelUpdateForm**|  | |


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

# **updateRagConfigApiV1RetrievalConfigUpdatePost**
> any updateRagConfigApiV1RetrievalConfigUpdatePost(configForm)


### Example

```typescript
import {
    RetrievalApi,
    Configuration,
    ConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new RetrievalApi(configuration);

let configForm: ConfigForm; //

const { status, data } = await apiInstance.updateRagConfigApiV1RetrievalConfigUpdatePost(
    configForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configForm** | **ConfigForm**|  | |


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

