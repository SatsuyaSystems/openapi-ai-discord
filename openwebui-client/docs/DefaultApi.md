# DefaultApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chatActionApiChatActionsActionIdPost**](#chatactionapichatactionsactionidpost) | **POST** /api/chat/actions/{action_id} | Chat Action|
|[**chatCompletedApiChatCompletedPost**](#chatcompletedapichatcompletedpost) | **POST** /api/chat/completed | Chat Completed|
|[**chatCompletionApiChatCompletionsPost**](#chatcompletionapichatcompletionspost) | **POST** /api/chat/completions | Chat Completion|
|[**chatCompletionApiV1ChatCompletionsPost**](#chatcompletionapiv1chatcompletionspost) | **POST** /api/v1/chat/completions | Chat Completion|
|[**embeddingsApiEmbeddingsPost**](#embeddingsapiembeddingspost) | **POST** /api/embeddings | Embeddings|
|[**embeddingsApiV1EmbeddingsPost**](#embeddingsapiv1embeddingspost) | **POST** /api/v1/embeddings | Embeddings|
|[**getAppChangelogApiChangelogGet**](#getappchangelogapichangelogget) | **GET** /api/changelog | Get App Changelog|
|[**getAppConfigApiConfigGet**](#getappconfigapiconfigget) | **GET** /api/config | Get App Config|
|[**getAppLatestReleaseVersionApiVersionUpdatesGet**](#getapplatestreleaseversionapiversionupdatesget) | **GET** /api/version/updates | Get App Latest Release Version|
|[**getAppVersionApiVersionGet**](#getappversionapiversionget) | **GET** /api/version | Get App Version|
|[**getBaseModelsApiModelsBaseGet**](#getbasemodelsapimodelsbaseget) | **GET** /api/models/base | Get Base Models|
|[**getCurrentUsageApiUsageGet**](#getcurrentusageapiusageget) | **GET** /api/usage | Get Current Usage|
|[**getManifestJsonManifestJsonGet**](#getmanifestjsonmanifestjsonget) | **GET** /manifest.json | Get Manifest Json|
|[**getModelsApiModelsGet**](#getmodelsapimodelsget) | **GET** /api/models | Get Models|
|[**getModelsApiV1ModelsGet**](#getmodelsapiv1modelsget) | **GET** /api/v1/models | Get Models|
|[**getOpensearchXmlOpensearchXmlGet**](#getopensearchxmlopensearchxmlget) | **GET** /opensearch.xml | Get Opensearch Xml|
|[**getWebhookUrlApiWebhookGet**](#getwebhookurlapiwebhookget) | **GET** /api/webhook | Get Webhook Url|
|[**healthcheckHealthGet**](#healthcheckhealthget) | **GET** /health | Healthcheck|
|[**healthcheckWithDbHealthDbGet**](#healthcheckwithdbhealthdbget) | **GET** /health/db | Healthcheck With Db|
|[**listTasksByChatIdEndpointApiTasksChatChatIdGet**](#listtasksbychatidendpointapitaskschatchatidget) | **GET** /api/tasks/chat/{chat_id} | List Tasks By Chat Id Endpoint|
|[**listTasksEndpointApiTasksGet**](#listtasksendpointapitasksget) | **GET** /api/tasks | List Tasks Endpoint|
|[**oauthClientAuthorizeOauthClientsClientIdAuthorizeGet**](#oauthclientauthorizeoauthclientsclientidauthorizeget) | **GET** /oauth/clients/{client_id}/authorize | Oauth Client Authorize|
|[**oauthClientCallbackOauthClientsClientIdCallbackGet**](#oauthclientcallbackoauthclientsclientidcallbackget) | **GET** /oauth/clients/{client_id}/callback | Oauth Client Callback|
|[**oauthLoginCallbackOauthProviderCallbackGet**](#oauthlogincallbackoauthprovidercallbackget) | **GET** /oauth/{provider}/callback | Oauth Login Callback|
|[**oauthLoginCallbackOauthProviderLoginCallbackGet**](#oauthlogincallbackoauthproviderlogincallbackget) | **GET** /oauth/{provider}/login/callback | Oauth Login Callback|
|[**oauthLoginOauthProviderLoginGet**](#oauthloginoauthproviderloginget) | **GET** /oauth/{provider}/login | Oauth Login|
|[**serveCacheFileCachePathGet**](#servecachefilecachepathget) | **GET** /cache/{path} | Serve Cache File|
|[**stopTaskEndpointApiTasksStopTaskIdPost**](#stoptaskendpointapitasksstoptaskidpost) | **POST** /api/tasks/stop/{task_id} | Stop Task Endpoint|
|[**updateWebhookUrlApiWebhookPost**](#updatewebhookurlapiwebhookpost) | **POST** /api/webhook | Update Webhook Url|

# **chatActionApiChatActionsActionIdPost**
> any chatActionApiChatActionsActionIdPost(requestBody)


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let actionId: string; // (default to undefined)
let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.chatActionApiChatActionsActionIdPost(
    actionId,
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |
| **actionId** | [**string**] |  | defaults to undefined|


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

# **chatCompletedApiChatCompletedPost**
> any chatCompletedApiChatCompletedPost(requestBody)


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.chatCompletedApiChatCompletedPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


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

# **chatCompletionApiChatCompletionsPost**
> any chatCompletionApiChatCompletionsPost(requestBody)


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.chatCompletionApiChatCompletionsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


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

# **chatCompletionApiV1ChatCompletionsPost**
> any chatCompletionApiV1ChatCompletionsPost(requestBody)


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.chatCompletionApiV1ChatCompletionsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


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

# **embeddingsApiEmbeddingsPost**
> any embeddingsApiEmbeddingsPost(requestBody)

OpenAI-compatible embeddings endpoint.  This handler:   - Performs user/model checks and dispatches to the correct backend.   - Supports OpenAI, Ollama, arena models, pipelines, and any compatible provider.  Args:     request (Request): Request context.     form_data (dict): OpenAI-like payload (e.g., {\"model\": \"...\", \"input\": [...]})     user (UserModel): Authenticated user.  Returns:     dict: OpenAI-compatible embeddings response.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.embeddingsApiEmbeddingsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


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

# **embeddingsApiV1EmbeddingsPost**
> any embeddingsApiV1EmbeddingsPost(requestBody)

OpenAI-compatible embeddings endpoint.  This handler:   - Performs user/model checks and dispatches to the correct backend.   - Supports OpenAI, Ollama, arena models, pipelines, and any compatible provider.  Args:     request (Request): Request context.     form_data (dict): OpenAI-like payload (e.g., {\"model\": \"...\", \"input\": [...]})     user (UserModel): Authenticated user.  Returns:     dict: OpenAI-compatible embeddings response.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.embeddingsApiV1EmbeddingsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


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

# **getAppChangelogApiChangelogGet**
> any getAppChangelogApiChangelogGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAppChangelogApiChangelogGet();
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

# **getAppConfigApiConfigGet**
> any getAppConfigApiConfigGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAppConfigApiConfigGet();
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

# **getAppLatestReleaseVersionApiVersionUpdatesGet**
> any getAppLatestReleaseVersionApiVersionUpdatesGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAppLatestReleaseVersionApiVersionUpdatesGet();
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

# **getAppVersionApiVersionGet**
> any getAppVersionApiVersionGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getAppVersionApiVersionGet();
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

# **getBaseModelsApiModelsBaseGet**
> any getBaseModelsApiModelsBaseGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getBaseModelsApiModelsBaseGet();
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

# **getCurrentUsageApiUsageGet**
> any getCurrentUsageApiUsageGet()

Get current usage statistics for Open WebUI. This is an experimental endpoint and subject to change.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getCurrentUsageApiUsageGet();
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

# **getManifestJsonManifestJsonGet**
> any getManifestJsonManifestJsonGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getManifestJsonManifestJsonGet();
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

# **getModelsApiModelsGet**
> any getModelsApiModelsGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getModelsApiModelsGet(
    refresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


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

# **getModelsApiV1ModelsGet**
> any getModelsApiV1ModelsGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let refresh: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.getModelsApiV1ModelsGet(
    refresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refresh** | [**boolean**] |  | (optional) defaults to false|


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

# **getOpensearchXmlOpensearchXmlGet**
> any getOpensearchXmlOpensearchXmlGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getOpensearchXmlOpensearchXmlGet();
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

# **getWebhookUrlApiWebhookGet**
> any getWebhookUrlApiWebhookGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getWebhookUrlApiWebhookGet();
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

# **healthcheckHealthGet**
> any healthcheckHealthGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.healthcheckHealthGet();
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

# **healthcheckWithDbHealthDbGet**
> any healthcheckWithDbHealthDbGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.healthcheckWithDbHealthDbGet();
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

# **listTasksByChatIdEndpointApiTasksChatChatIdGet**
> any listTasksByChatIdEndpointApiTasksChatChatIdGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let chatId: string; // (default to undefined)

const { status, data } = await apiInstance.listTasksByChatIdEndpointApiTasksChatChatIdGet(
    chatId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatId** | [**string**] |  | defaults to undefined|


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

# **listTasksEndpointApiTasksGet**
> any listTasksEndpointApiTasksGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.listTasksEndpointApiTasksGet();
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

# **oauthClientAuthorizeOauthClientsClientIdAuthorizeGet**
> any oauthClientAuthorizeOauthClientsClientIdAuthorizeGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.oauthClientAuthorizeOauthClientsClientIdAuthorizeGet(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|


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

# **oauthClientCallbackOauthClientsClientIdCallbackGet**
> any oauthClientCallbackOauthClientsClientIdCallbackGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.oauthClientCallbackOauthClientsClientIdCallbackGet(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|


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

# **oauthLoginCallbackOauthProviderCallbackGet**
> any oauthLoginCallbackOauthProviderCallbackGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let provider: string; // (default to undefined)

const { status, data } = await apiInstance.oauthLoginCallbackOauthProviderCallbackGet(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] |  | defaults to undefined|


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

# **oauthLoginCallbackOauthProviderLoginCallbackGet**
> any oauthLoginCallbackOauthProviderLoginCallbackGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let provider: string; // (default to undefined)

const { status, data } = await apiInstance.oauthLoginCallbackOauthProviderLoginCallbackGet(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] |  | defaults to undefined|


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

# **oauthLoginOauthProviderLoginGet**
> any oauthLoginOauthProviderLoginGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let provider: string; // (default to undefined)

const { status, data } = await apiInstance.oauthLoginOauthProviderLoginGet(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] |  | defaults to undefined|


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

# **serveCacheFileCachePathGet**
> any serveCacheFileCachePathGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let path: string; // (default to undefined)

const { status, data } = await apiInstance.serveCacheFileCachePathGet(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] |  | defaults to undefined|


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

# **stopTaskEndpointApiTasksStopTaskIdPost**
> any stopTaskEndpointApiTasksStopTaskIdPost()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let taskId: string; // (default to undefined)

const { status, data } = await apiInstance.stopTaskEndpointApiTasksStopTaskIdPost(
    taskId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskId** | [**string**] |  | defaults to undefined|


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

# **updateWebhookUrlApiWebhookPost**
> any updateWebhookUrlApiWebhookPost(urlForm)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UrlForm
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let urlForm: UrlForm; //

const { status, data } = await apiInstance.updateWebhookUrlApiWebhookPost(
    urlForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **urlForm** | **UrlForm**|  | |


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

