# PipelinesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addPipelineApiV1PipelinesAddPost**](#addpipelineapiv1pipelinesaddpost) | **POST** /api/v1/pipelines/add | Add Pipeline|
|[**deletePipelineApiV1PipelinesDeleteDelete**](#deletepipelineapiv1pipelinesdeletedelete) | **DELETE** /api/v1/pipelines/delete | Delete Pipeline|
|[**getPipelineValvesApiV1PipelinesPipelineIdValvesGet**](#getpipelinevalvesapiv1pipelinespipelineidvalvesget) | **GET** /api/v1/pipelines/{pipeline_id}/valves | Get Pipeline Valves|
|[**getPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet**](#getpipelinevalvesspecapiv1pipelinespipelineidvalvesspecget) | **GET** /api/v1/pipelines/{pipeline_id}/valves/spec | Get Pipeline Valves Spec|
|[**getPipelinesApiV1PipelinesGet**](#getpipelinesapiv1pipelinesget) | **GET** /api/v1/pipelines/ | Get Pipelines|
|[**getPipelinesListApiV1PipelinesListGet**](#getpipelineslistapiv1pipelineslistget) | **GET** /api/v1/pipelines/list | Get Pipelines List|
|[**updatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost**](#updatepipelinevalvesapiv1pipelinespipelineidvalvesupdatepost) | **POST** /api/v1/pipelines/{pipeline_id}/valves/update | Update Pipeline Valves|
|[**uploadPipelineApiV1PipelinesUploadPost**](#uploadpipelineapiv1pipelinesuploadpost) | **POST** /api/v1/pipelines/upload | Upload Pipeline|

# **addPipelineApiV1PipelinesAddPost**
> any addPipelineApiV1PipelinesAddPost(addPipelineForm)


### Example

```typescript
import {
    PipelinesApi,
    Configuration,
    AddPipelineForm
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let addPipelineForm: AddPipelineForm; //

const { status, data } = await apiInstance.addPipelineApiV1PipelinesAddPost(
    addPipelineForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPipelineForm** | **AddPipelineForm**|  | |


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

# **deletePipelineApiV1PipelinesDeleteDelete**
> any deletePipelineApiV1PipelinesDeleteDelete(deletePipelineForm)


### Example

```typescript
import {
    PipelinesApi,
    Configuration,
    DeletePipelineForm
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let deletePipelineForm: DeletePipelineForm; //

const { status, data } = await apiInstance.deletePipelineApiV1PipelinesDeleteDelete(
    deletePipelineForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deletePipelineForm** | **DeletePipelineForm**|  | |


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

# **getPipelineValvesApiV1PipelinesPipelineIdValvesGet**
> any getPipelineValvesApiV1PipelinesPipelineIdValvesGet()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let pipelineId: string; // (default to undefined)
let urlIdx: number; // (default to undefined)

const { status, data } = await apiInstance.getPipelineValvesApiV1PipelinesPipelineIdValvesGet(
    pipelineId,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pipelineId** | [**string**] |  | defaults to undefined|
| **urlIdx** | [**number**] |  | defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet**
> any getPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let pipelineId: string; // (default to undefined)
let urlIdx: number; // (default to undefined)

const { status, data } = await apiInstance.getPipelineValvesSpecApiV1PipelinesPipelineIdValvesSpecGet(
    pipelineId,
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pipelineId** | [**string**] |  | defaults to undefined|
| **urlIdx** | [**number**] |  | defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPipelinesApiV1PipelinesGet**
> any getPipelinesApiV1PipelinesGet()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let urlIdx: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getPipelinesApiV1PipelinesGet(
    urlIdx
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlIdx** | [**number**] |  | (optional) defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPipelinesListApiV1PipelinesListGet**
> any getPipelinesListApiV1PipelinesListGet()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

const { status, data } = await apiInstance.getPipelinesListApiV1PipelinesListGet();
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

# **updatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost**
> any updatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost(requestBody)


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let pipelineId: string; // (default to undefined)
let urlIdx: number; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updatePipelineValvesApiV1PipelinesPipelineIdValvesUpdatePost(
    pipelineId,
    urlIdx,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **pipelineId** | [**string**] |  | defaults to undefined|
| **urlIdx** | [**number**] |  | defaults to undefined|


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

# **uploadPipelineApiV1PipelinesUploadPost**
> any uploadPipelineApiV1PipelinesUploadPost()


### Example

```typescript
import {
    PipelinesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PipelinesApi(configuration);

let urlIdx: number; // (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadPipelineApiV1PipelinesUploadPost(
    urlIdx,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlIdx** | [**number**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

