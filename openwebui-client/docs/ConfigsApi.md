# ConfigsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**exportConfigApiV1ConfigsExportGet**](#exportconfigapiv1configsexportget) | **GET** /api/v1/configs/export | Export Config|
|[**getBannersApiV1ConfigsBannersGet**](#getbannersapiv1configsbannersget) | **GET** /api/v1/configs/banners | Get Banners|
|[**getCodeExecutionConfigApiV1ConfigsCodeExecutionGet**](#getcodeexecutionconfigapiv1configscodeexecutionget) | **GET** /api/v1/configs/code_execution | Get Code Execution Config|
|[**getConnectionsConfigApiV1ConfigsConnectionsGet**](#getconnectionsconfigapiv1configsconnectionsget) | **GET** /api/v1/configs/connections | Get Connections Config|
|[**getModelsConfigApiV1ConfigsModelsGet**](#getmodelsconfigapiv1configsmodelsget) | **GET** /api/v1/configs/models | Get Models Config|
|[**getToolServersConfigApiV1ConfigsToolServersGet**](#gettoolserversconfigapiv1configstoolserversget) | **GET** /api/v1/configs/tool_servers | Get Tool Servers Config|
|[**importConfigApiV1ConfigsImportPost**](#importconfigapiv1configsimportpost) | **POST** /api/v1/configs/import | Import Config|
|[**registerOauthClientApiV1ConfigsOauthClientsRegisterPost**](#registeroauthclientapiv1configsoauthclientsregisterpost) | **POST** /api/v1/configs/oauth/clients/register | Register Oauth Client|
|[**setBannersApiV1ConfigsBannersPost**](#setbannersapiv1configsbannerspost) | **POST** /api/v1/configs/banners | Set Banners|
|[**setCodeExecutionConfigApiV1ConfigsCodeExecutionPost**](#setcodeexecutionconfigapiv1configscodeexecutionpost) | **POST** /api/v1/configs/code_execution | Set Code Execution Config|
|[**setConnectionsConfigApiV1ConfigsConnectionsPost**](#setconnectionsconfigapiv1configsconnectionspost) | **POST** /api/v1/configs/connections | Set Connections Config|
|[**setDefaultSuggestionsApiV1ConfigsSuggestionsPost**](#setdefaultsuggestionsapiv1configssuggestionspost) | **POST** /api/v1/configs/suggestions | Set Default Suggestions|
|[**setModelsConfigApiV1ConfigsModelsPost**](#setmodelsconfigapiv1configsmodelspost) | **POST** /api/v1/configs/models | Set Models Config|
|[**setToolServersConfigApiV1ConfigsToolServersPost**](#settoolserversconfigapiv1configstoolserverspost) | **POST** /api/v1/configs/tool_servers | Set Tool Servers Config|
|[**verifyToolServersConfigApiV1ConfigsToolServersVerifyPost**](#verifytoolserversconfigapiv1configstoolserversverifypost) | **POST** /api/v1/configs/tool_servers/verify | Verify Tool Servers Config|

# **exportConfigApiV1ConfigsExportGet**
> { [key: string]: any; } exportConfigApiV1ConfigsExportGet()


### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

const { status, data } = await apiInstance.exportConfigApiV1ConfigsExportGet();
```

### Parameters
This endpoint does not have any parameters.


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBannersApiV1ConfigsBannersGet**
> Array<BannerModel> getBannersApiV1ConfigsBannersGet()


### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

const { status, data } = await apiInstance.getBannersApiV1ConfigsBannersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BannerModel>**

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

# **getCodeExecutionConfigApiV1ConfigsCodeExecutionGet**
> CodeInterpreterConfigForm getCodeExecutionConfigApiV1ConfigsCodeExecutionGet()


### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

const { status, data } = await apiInstance.getCodeExecutionConfigApiV1ConfigsCodeExecutionGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CodeInterpreterConfigForm**

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

# **getConnectionsConfigApiV1ConfigsConnectionsGet**
> ConnectionsConfigForm getConnectionsConfigApiV1ConfigsConnectionsGet()


### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

const { status, data } = await apiInstance.getConnectionsConfigApiV1ConfigsConnectionsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ConnectionsConfigForm**

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

# **getModelsConfigApiV1ConfigsModelsGet**
> ModelsConfigForm getModelsConfigApiV1ConfigsModelsGet()


### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

const { status, data } = await apiInstance.getModelsConfigApiV1ConfigsModelsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ModelsConfigForm**

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

# **getToolServersConfigApiV1ConfigsToolServersGet**
> ToolServersConfigForm getToolServersConfigApiV1ConfigsToolServersGet()


### Example

```typescript
import {
    ConfigsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

const { status, data } = await apiInstance.getToolServersConfigApiV1ConfigsToolServersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ToolServersConfigForm**

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

# **importConfigApiV1ConfigsImportPost**
> { [key: string]: any; } importConfigApiV1ConfigsImportPost(importConfigForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    ImportConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let importConfigForm: ImportConfigForm; //

const { status, data } = await apiInstance.importConfigApiV1ConfigsImportPost(
    importConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importConfigForm** | **ImportConfigForm**|  | |


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

# **registerOauthClientApiV1ConfigsOauthClientsRegisterPost**
> any registerOauthClientApiV1ConfigsOauthClientsRegisterPost(oAuthClientRegistrationForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    OAuthClientRegistrationForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let oAuthClientRegistrationForm: OAuthClientRegistrationForm; //
let type: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.registerOauthClientApiV1ConfigsOauthClientsRegisterPost(
    oAuthClientRegistrationForm,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **oAuthClientRegistrationForm** | **OAuthClientRegistrationForm**|  | |
| **type** | [**string**] |  | (optional) defaults to undefined|


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

# **setBannersApiV1ConfigsBannersPost**
> Array<BannerModel> setBannersApiV1ConfigsBannersPost(setBannersForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    SetBannersForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let setBannersForm: SetBannersForm; //

const { status, data } = await apiInstance.setBannersApiV1ConfigsBannersPost(
    setBannersForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setBannersForm** | **SetBannersForm**|  | |


### Return type

**Array<BannerModel>**

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

# **setCodeExecutionConfigApiV1ConfigsCodeExecutionPost**
> CodeInterpreterConfigForm setCodeExecutionConfigApiV1ConfigsCodeExecutionPost(codeInterpreterConfigForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    CodeInterpreterConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let codeInterpreterConfigForm: CodeInterpreterConfigForm; //

const { status, data } = await apiInstance.setCodeExecutionConfigApiV1ConfigsCodeExecutionPost(
    codeInterpreterConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeInterpreterConfigForm** | **CodeInterpreterConfigForm**|  | |


### Return type

**CodeInterpreterConfigForm**

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

# **setConnectionsConfigApiV1ConfigsConnectionsPost**
> ConnectionsConfigForm setConnectionsConfigApiV1ConfigsConnectionsPost(connectionsConfigForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    ConnectionsConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let connectionsConfigForm: ConnectionsConfigForm; //

const { status, data } = await apiInstance.setConnectionsConfigApiV1ConfigsConnectionsPost(
    connectionsConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectionsConfigForm** | **ConnectionsConfigForm**|  | |


### Return type

**ConnectionsConfigForm**

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

# **setDefaultSuggestionsApiV1ConfigsSuggestionsPost**
> Array<PromptSuggestion> setDefaultSuggestionsApiV1ConfigsSuggestionsPost(setDefaultSuggestionsForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    SetDefaultSuggestionsForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let setDefaultSuggestionsForm: SetDefaultSuggestionsForm; //

const { status, data } = await apiInstance.setDefaultSuggestionsApiV1ConfigsSuggestionsPost(
    setDefaultSuggestionsForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDefaultSuggestionsForm** | **SetDefaultSuggestionsForm**|  | |


### Return type

**Array<PromptSuggestion>**

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

# **setModelsConfigApiV1ConfigsModelsPost**
> ModelsConfigForm setModelsConfigApiV1ConfigsModelsPost(modelsConfigForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    ModelsConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let modelsConfigForm: ModelsConfigForm; //

const { status, data } = await apiInstance.setModelsConfigApiV1ConfigsModelsPost(
    modelsConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **modelsConfigForm** | **ModelsConfigForm**|  | |


### Return type

**ModelsConfigForm**

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

# **setToolServersConfigApiV1ConfigsToolServersPost**
> ToolServersConfigForm setToolServersConfigApiV1ConfigsToolServersPost(toolServersConfigForm)


### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    ToolServersConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let toolServersConfigForm: ToolServersConfigForm; //

const { status, data } = await apiInstance.setToolServersConfigApiV1ConfigsToolServersPost(
    toolServersConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toolServersConfigForm** | **ToolServersConfigForm**|  | |


### Return type

**ToolServersConfigForm**

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

# **verifyToolServersConfigApiV1ConfigsToolServersVerifyPost**
> any verifyToolServersConfigApiV1ConfigsToolServersVerifyPost(toolServerConnection)

Verify the connection to the tool server.

### Example

```typescript
import {
    ConfigsApi,
    Configuration,
    ToolServerConnection
} from './api';

const configuration = new Configuration();
const apiInstance = new ConfigsApi(configuration);

let toolServerConnection: ToolServerConnection; //

const { status, data } = await apiInstance.verifyToolServersConfigApiV1ConfigsToolServersVerifyPost(
    toolServerConnection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **toolServerConnection** | **ToolServerConnection**|  | |


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

