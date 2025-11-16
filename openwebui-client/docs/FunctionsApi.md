# FunctionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewFunctionApiV1FunctionsCreatePost**](#createnewfunctionapiv1functionscreatepost) | **POST** /api/v1/functions/create | Create New Function|
|[**deleteFunctionByIdApiV1FunctionsIdIdDeleteDelete**](#deletefunctionbyidapiv1functionsididdeletedelete) | **DELETE** /api/v1/functions/id/{id}/delete | Delete Function By Id|
|[**getFunctionByIdApiV1FunctionsIdIdGet**](#getfunctionbyidapiv1functionsididget) | **GET** /api/v1/functions/id/{id} | Get Function By Id|
|[**getFunctionListApiV1FunctionsListGet**](#getfunctionlistapiv1functionslistget) | **GET** /api/v1/functions/list | Get Function List|
|[**getFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet**](#getfunctionuservalvesbyidapiv1functionsididvalvesuserget) | **GET** /api/v1/functions/id/{id}/valves/user | Get Function User Valves By Id|
|[**getFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet**](#getfunctionuservalvesspecbyidapiv1functionsididvalvesuserspecget) | **GET** /api/v1/functions/id/{id}/valves/user/spec | Get Function User Valves Spec By Id|
|[**getFunctionValvesByIdApiV1FunctionsIdIdValvesGet**](#getfunctionvalvesbyidapiv1functionsididvalvesget) | **GET** /api/v1/functions/id/{id}/valves | Get Function Valves By Id|
|[**getFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet**](#getfunctionvalvesspecbyidapiv1functionsididvalvesspecget) | **GET** /api/v1/functions/id/{id}/valves/spec | Get Function Valves Spec By Id|
|[**getFunctionsApiV1FunctionsExportGet**](#getfunctionsapiv1functionsexportget) | **GET** /api/v1/functions/export | Get Functions|
|[**getFunctionsApiV1FunctionsGet**](#getfunctionsapiv1functionsget) | **GET** /api/v1/functions/ | Get Functions|
|[**loadFunctionFromUrlApiV1FunctionsLoadUrlPost**](#loadfunctionfromurlapiv1functionsloadurlpost) | **POST** /api/v1/functions/load/url | Load Function From Url|
|[**syncFunctionsApiV1FunctionsSyncPost**](#syncfunctionsapiv1functionssyncpost) | **POST** /api/v1/functions/sync | Sync Functions|
|[**toggleFunctionByIdApiV1FunctionsIdIdTogglePost**](#togglefunctionbyidapiv1functionsididtogglepost) | **POST** /api/v1/functions/id/{id}/toggle | Toggle Function By Id|
|[**toggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost**](#toggleglobalbyidapiv1functionsididtoggleglobalpost) | **POST** /api/v1/functions/id/{id}/toggle/global | Toggle Global By Id|
|[**updateFunctionByIdApiV1FunctionsIdIdUpdatePost**](#updatefunctionbyidapiv1functionsididupdatepost) | **POST** /api/v1/functions/id/{id}/update | Update Function By Id|
|[**updateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost**](#updatefunctionuservalvesbyidapiv1functionsididvalvesuserupdatepost) | **POST** /api/v1/functions/id/{id}/valves/user/update | Update Function User Valves By Id|
|[**updateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost**](#updatefunctionvalvesbyidapiv1functionsididvalvesupdatepost) | **POST** /api/v1/functions/id/{id}/valves/update | Update Function Valves By Id|

# **createNewFunctionApiV1FunctionsCreatePost**
> FunctionResponse createNewFunctionApiV1FunctionsCreatePost(functionForm)


### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    FunctionForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let functionForm: FunctionForm; //

const { status, data } = await apiInstance.createNewFunctionApiV1FunctionsCreatePost(
    functionForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **functionForm** | **FunctionForm**|  | |


### Return type

**FunctionResponse**

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

# **deleteFunctionByIdApiV1FunctionsIdIdDeleteDelete**
> boolean deleteFunctionByIdApiV1FunctionsIdIdDeleteDelete()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFunctionByIdApiV1FunctionsIdIdDeleteDelete(
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

# **getFunctionByIdApiV1FunctionsIdIdGet**
> FunctionModel getFunctionByIdApiV1FunctionsIdIdGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionByIdApiV1FunctionsIdIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FunctionModel**

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

# **getFunctionListApiV1FunctionsListGet**
> Array<FunctionUserResponse> getFunctionListApiV1FunctionsListGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

const { status, data } = await apiInstance.getFunctionListApiV1FunctionsListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FunctionUserResponse>**

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

# **getFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet**
> { [key: string]: any; } getFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet**
> { [key: string]: any; } getFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionUserValvesSpecByIdApiV1FunctionsIdIdValvesUserSpecGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getFunctionValvesByIdApiV1FunctionsIdIdValvesGet**
> { [key: string]: any; } getFunctionValvesByIdApiV1FunctionsIdIdValvesGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionValvesByIdApiV1FunctionsIdIdValvesGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet**
> { [key: string]: any; } getFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFunctionValvesSpecByIdApiV1FunctionsIdIdValvesSpecGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **getFunctionsApiV1FunctionsExportGet**
> Array<GetFunctionsApiV1FunctionsExportGet200ResponseInner> getFunctionsApiV1FunctionsExportGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let includeValves: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getFunctionsApiV1FunctionsExportGet(
    includeValves
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeValves** | [**boolean**] |  | (optional) defaults to false|


### Return type

**Array<GetFunctionsApiV1FunctionsExportGet200ResponseInner>**

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

# **getFunctionsApiV1FunctionsGet**
> Array<FunctionResponse> getFunctionsApiV1FunctionsGet()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

const { status, data } = await apiInstance.getFunctionsApiV1FunctionsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FunctionResponse>**

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

# **loadFunctionFromUrlApiV1FunctionsLoadUrlPost**
> { [key: string]: any; } loadFunctionFromUrlApiV1FunctionsLoadUrlPost(loadUrlForm)


### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    LoadUrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let loadUrlForm: LoadUrlForm; //

const { status, data } = await apiInstance.loadFunctionFromUrlApiV1FunctionsLoadUrlPost(
    loadUrlForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loadUrlForm** | **LoadUrlForm**|  | |


### Return type

**{ [key: string]: any; }**

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

# **syncFunctionsApiV1FunctionsSyncPost**
> Array<FunctionWithValvesModel> syncFunctionsApiV1FunctionsSyncPost(syncFunctionsForm)


### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    SyncFunctionsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let syncFunctionsForm: SyncFunctionsForm; //

const { status, data } = await apiInstance.syncFunctionsApiV1FunctionsSyncPost(
    syncFunctionsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncFunctionsForm** | **SyncFunctionsForm**|  | |


### Return type

**Array<FunctionWithValvesModel>**

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

# **toggleFunctionByIdApiV1FunctionsIdIdTogglePost**
> FunctionModel toggleFunctionByIdApiV1FunctionsIdIdTogglePost()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.toggleFunctionByIdApiV1FunctionsIdIdTogglePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FunctionModel**

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

# **toggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost**
> FunctionModel toggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost()


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.toggleGlobalByIdApiV1FunctionsIdIdToggleGlobalPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FunctionModel**

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

# **updateFunctionByIdApiV1FunctionsIdIdUpdatePost**
> FunctionModel updateFunctionByIdApiV1FunctionsIdIdUpdatePost(functionForm)


### Example

```typescript
import {
    FunctionsApi,
    Configuration,
    FunctionForm
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)
let functionForm: FunctionForm; //

const { status, data } = await apiInstance.updateFunctionByIdApiV1FunctionsIdIdUpdatePost(
    id,
    functionForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **functionForm** | **FunctionForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FunctionModel**

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

# **updateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost**
> { [key: string]: any; } updateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost(requestBody)


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateFunctionUserValvesByIdApiV1FunctionsIdIdValvesUserUpdatePost(
    id,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **updateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost**
> { [key: string]: any; } updateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost(requestBody)


### Example

```typescript
import {
    FunctionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FunctionsApi(configuration);

let id: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateFunctionValvesByIdApiV1FunctionsIdIdValvesUpdatePost(
    id,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

