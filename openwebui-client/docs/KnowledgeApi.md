# KnowledgeApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost**](#addfiletoknowledgebyidapiv1knowledgeidfileaddpost) | **POST** /api/v1/knowledge/{id}/file/add | Add File To Knowledge By Id|
|[**addFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost**](#addfilestoknowledgebatchapiv1knowledgeidfilesbatchaddpost) | **POST** /api/v1/knowledge/{id}/files/batch/add | Add Files To Knowledge Batch|
|[**createNewKnowledgeApiV1KnowledgeCreatePost**](#createnewknowledgeapiv1knowledgecreatepost) | **POST** /api/v1/knowledge/create | Create New Knowledge|
|[**deleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete**](#deleteknowledgebyidapiv1knowledgeiddeletedelete) | **DELETE** /api/v1/knowledge/{id}/delete | Delete Knowledge By Id|
|[**getKnowledgeApiV1KnowledgeGet**](#getknowledgeapiv1knowledgeget) | **GET** /api/v1/knowledge/ | Get Knowledge|
|[**getKnowledgeByIdApiV1KnowledgeIdGet**](#getknowledgebyidapiv1knowledgeidget) | **GET** /api/v1/knowledge/{id} | Get Knowledge By Id|
|[**getKnowledgeListApiV1KnowledgeListGet**](#getknowledgelistapiv1knowledgelistget) | **GET** /api/v1/knowledge/list | Get Knowledge List|
|[**reindexKnowledgeFilesApiV1KnowledgeReindexPost**](#reindexknowledgefilesapiv1knowledgereindexpost) | **POST** /api/v1/knowledge/reindex | Reindex Knowledge Files|
|[**removeFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost**](#removefilefromknowledgebyidapiv1knowledgeidfileremovepost) | **POST** /api/v1/knowledge/{id}/file/remove | Remove File From Knowledge By Id|
|[**resetKnowledgeByIdApiV1KnowledgeIdResetPost**](#resetknowledgebyidapiv1knowledgeidresetpost) | **POST** /api/v1/knowledge/{id}/reset | Reset Knowledge By Id|
|[**updateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost**](#updatefilefromknowledgebyidapiv1knowledgeidfileupdatepost) | **POST** /api/v1/knowledge/{id}/file/update | Update File From Knowledge By Id|
|[**updateKnowledgeByIdApiV1KnowledgeIdUpdatePost**](#updateknowledgebyidapiv1knowledgeidupdatepost) | **POST** /api/v1/knowledge/{id}/update | Update Knowledge By Id|

# **addFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost**
> KnowledgeFilesResponse addFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost(knowledgeFileIdForm)


### Example

```typescript
import {
    KnowledgeApi,
    Configuration,
    KnowledgeFileIdForm
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)
let knowledgeFileIdForm: KnowledgeFileIdForm; //

const { status, data } = await apiInstance.addFileToKnowledgeByIdApiV1KnowledgeIdFileAddPost(
    id,
    knowledgeFileIdForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **knowledgeFileIdForm** | **KnowledgeFileIdForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KnowledgeFilesResponse**

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

# **addFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost**
> KnowledgeFilesResponse addFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost(knowledgeFileIdForm)

Add multiple files to a knowledge base

### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)
let knowledgeFileIdForm: Array<KnowledgeFileIdForm>; //

const { status, data } = await apiInstance.addFilesToKnowledgeBatchApiV1KnowledgeIdFilesBatchAddPost(
    id,
    knowledgeFileIdForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **knowledgeFileIdForm** | **Array<KnowledgeFileIdForm>**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KnowledgeFilesResponse**

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

# **createNewKnowledgeApiV1KnowledgeCreatePost**
> KnowledgeResponse createNewKnowledgeApiV1KnowledgeCreatePost(knowledgeForm)


### Example

```typescript
import {
    KnowledgeApi,
    Configuration,
    KnowledgeForm
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let knowledgeForm: KnowledgeForm; //

const { status, data } = await apiInstance.createNewKnowledgeApiV1KnowledgeCreatePost(
    knowledgeForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **knowledgeForm** | **KnowledgeForm**|  | |


### Return type

**KnowledgeResponse**

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

# **deleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete**
> boolean deleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete()


### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteKnowledgeByIdApiV1KnowledgeIdDeleteDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **getKnowledgeApiV1KnowledgeGet**
> Array<KnowledgeUserResponse> getKnowledgeApiV1KnowledgeGet()


### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

const { status, data } = await apiInstance.getKnowledgeApiV1KnowledgeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<KnowledgeUserResponse>**

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

# **getKnowledgeByIdApiV1KnowledgeIdGet**
> KnowledgeFilesResponse getKnowledgeByIdApiV1KnowledgeIdGet()


### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getKnowledgeByIdApiV1KnowledgeIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KnowledgeFilesResponse**

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

# **getKnowledgeListApiV1KnowledgeListGet**
> Array<KnowledgeUserResponse> getKnowledgeListApiV1KnowledgeListGet()


### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

const { status, data } = await apiInstance.getKnowledgeListApiV1KnowledgeListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<KnowledgeUserResponse>**

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

# **reindexKnowledgeFilesApiV1KnowledgeReindexPost**
> boolean reindexKnowledgeFilesApiV1KnowledgeReindexPost()


### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

const { status, data } = await apiInstance.reindexKnowledgeFilesApiV1KnowledgeReindexPost();
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

# **removeFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost**
> KnowledgeFilesResponse removeFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost(knowledgeFileIdForm)


### Example

```typescript
import {
    KnowledgeApi,
    Configuration,
    KnowledgeFileIdForm
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)
let knowledgeFileIdForm: KnowledgeFileIdForm; //
let deleteFile: boolean; // (optional) (default to true)

const { status, data } = await apiInstance.removeFileFromKnowledgeByIdApiV1KnowledgeIdFileRemovePost(
    id,
    knowledgeFileIdForm,
    deleteFile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **knowledgeFileIdForm** | **KnowledgeFileIdForm**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **deleteFile** | [**boolean**] |  | (optional) defaults to true|


### Return type

**KnowledgeFilesResponse**

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

# **resetKnowledgeByIdApiV1KnowledgeIdResetPost**
> KnowledgeResponse resetKnowledgeByIdApiV1KnowledgeIdResetPost()


### Example

```typescript
import {
    KnowledgeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.resetKnowledgeByIdApiV1KnowledgeIdResetPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KnowledgeResponse**

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

# **updateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost**
> KnowledgeFilesResponse updateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost(knowledgeFileIdForm)


### Example

```typescript
import {
    KnowledgeApi,
    Configuration,
    KnowledgeFileIdForm
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)
let knowledgeFileIdForm: KnowledgeFileIdForm; //

const { status, data } = await apiInstance.updateFileFromKnowledgeByIdApiV1KnowledgeIdFileUpdatePost(
    id,
    knowledgeFileIdForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **knowledgeFileIdForm** | **KnowledgeFileIdForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KnowledgeFilesResponse**

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

# **updateKnowledgeByIdApiV1KnowledgeIdUpdatePost**
> KnowledgeFilesResponse updateKnowledgeByIdApiV1KnowledgeIdUpdatePost(knowledgeForm)


### Example

```typescript
import {
    KnowledgeApi,
    Configuration,
    KnowledgeForm
} from './api';

const configuration = new Configuration();
const apiInstance = new KnowledgeApi(configuration);

let id: string; // (default to undefined)
let knowledgeForm: KnowledgeForm; //

const { status, data } = await apiInstance.updateKnowledgeByIdApiV1KnowledgeIdUpdatePost(
    id,
    knowledgeForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **knowledgeForm** | **KnowledgeForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KnowledgeFilesResponse**

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

