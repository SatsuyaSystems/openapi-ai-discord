# UtilsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadChatAsPdfApiV1UtilsPdfPost**](#downloadchataspdfapiv1utilspdfpost) | **POST** /api/v1/utils/pdf | Download Chat As Pdf|
|[**downloadDbApiV1UtilsDbDownloadGet**](#downloaddbapiv1utilsdbdownloadget) | **GET** /api/v1/utils/db/download | Download Db|
|[**downloadLitellmConfigYamlApiV1UtilsLitellmConfigGet**](#downloadlitellmconfigyamlapiv1utilslitellmconfigget) | **GET** /api/v1/utils/litellm/config | Download Litellm Config Yaml|
|[**executeCodeApiV1UtilsCodeExecutePost**](#executecodeapiv1utilscodeexecutepost) | **POST** /api/v1/utils/code/execute | Execute Code|
|[**formatCodeApiV1UtilsCodeFormatPost**](#formatcodeapiv1utilscodeformatpost) | **POST** /api/v1/utils/code/format | Format Code|
|[**getGravatarApiV1UtilsGravatarGet**](#getgravatarapiv1utilsgravatarget) | **GET** /api/v1/utils/gravatar | Get Gravatar|
|[**getHtmlFromMarkdownApiV1UtilsMarkdownPost**](#gethtmlfrommarkdownapiv1utilsmarkdownpost) | **POST** /api/v1/utils/markdown | Get Html From Markdown|

# **downloadChatAsPdfApiV1UtilsPdfPost**
> any downloadChatAsPdfApiV1UtilsPdfPost(chatTitleMessagesForm)


### Example

```typescript
import {
    UtilsApi,
    Configuration,
    ChatTitleMessagesForm
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

let chatTitleMessagesForm: ChatTitleMessagesForm; //

const { status, data } = await apiInstance.downloadChatAsPdfApiV1UtilsPdfPost(
    chatTitleMessagesForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatTitleMessagesForm** | **ChatTitleMessagesForm**|  | |


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

# **downloadDbApiV1UtilsDbDownloadGet**
> any downloadDbApiV1UtilsDbDownloadGet()


### Example

```typescript
import {
    UtilsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

const { status, data } = await apiInstance.downloadDbApiV1UtilsDbDownloadGet();
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

# **downloadLitellmConfigYamlApiV1UtilsLitellmConfigGet**
> any downloadLitellmConfigYamlApiV1UtilsLitellmConfigGet()


### Example

```typescript
import {
    UtilsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

const { status, data } = await apiInstance.downloadLitellmConfigYamlApiV1UtilsLitellmConfigGet();
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

# **executeCodeApiV1UtilsCodeExecutePost**
> any executeCodeApiV1UtilsCodeExecutePost(codeForm)


### Example

```typescript
import {
    UtilsApi,
    Configuration,
    CodeForm
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

let codeForm: CodeForm; //

const { status, data } = await apiInstance.executeCodeApiV1UtilsCodeExecutePost(
    codeForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeForm** | **CodeForm**|  | |


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

# **formatCodeApiV1UtilsCodeFormatPost**
> any formatCodeApiV1UtilsCodeFormatPost(codeForm)


### Example

```typescript
import {
    UtilsApi,
    Configuration,
    CodeForm
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

let codeForm: CodeForm; //

const { status, data } = await apiInstance.formatCodeApiV1UtilsCodeFormatPost(
    codeForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeForm** | **CodeForm**|  | |


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

# **getGravatarApiV1UtilsGravatarGet**
> any getGravatarApiV1UtilsGravatarGet()


### Example

```typescript
import {
    UtilsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.getGravatarApiV1UtilsGravatarGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


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

# **getHtmlFromMarkdownApiV1UtilsMarkdownPost**
> any getHtmlFromMarkdownApiV1UtilsMarkdownPost(markdownForm)


### Example

```typescript
import {
    UtilsApi,
    Configuration,
    MarkdownForm
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

let markdownForm: MarkdownForm; //

const { status, data } = await apiInstance.getHtmlFromMarkdownApiV1UtilsMarkdownPost(
    markdownForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markdownForm** | **MarkdownForm**|  | |


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

