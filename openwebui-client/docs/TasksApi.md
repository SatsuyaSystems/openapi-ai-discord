# TasksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateAutocompletionApiV1TasksAutoCompletionsPost**](#generateautocompletionapiv1tasksautocompletionspost) | **POST** /api/v1/tasks/auto/completions | Generate Autocompletion|
|[**generateChatTagsApiV1TasksTagsCompletionsPost**](#generatechattagsapiv1taskstagscompletionspost) | **POST** /api/v1/tasks/tags/completions | Generate Chat Tags|
|[**generateEmojiApiV1TasksEmojiCompletionsPost**](#generateemojiapiv1tasksemojicompletionspost) | **POST** /api/v1/tasks/emoji/completions | Generate Emoji|
|[**generateFollowUpsApiV1TasksFollowUpCompletionsPost**](#generatefollowupsapiv1tasksfollowupcompletionspost) | **POST** /api/v1/tasks/follow_up/completions | Generate Follow Ups|
|[**generateImagePromptApiV1TasksImagePromptCompletionsPost**](#generateimagepromptapiv1tasksimagepromptcompletionspost) | **POST** /api/v1/tasks/image_prompt/completions | Generate Image Prompt|
|[**generateMoaResponseApiV1TasksMoaCompletionsPost**](#generatemoaresponseapiv1tasksmoacompletionspost) | **POST** /api/v1/tasks/moa/completions | Generate Moa Response|
|[**generateQueriesApiV1TasksQueriesCompletionsPost**](#generatequeriesapiv1tasksqueriescompletionspost) | **POST** /api/v1/tasks/queries/completions | Generate Queries|
|[**generateTitleApiV1TasksTitleCompletionsPost**](#generatetitleapiv1taskstitlecompletionspost) | **POST** /api/v1/tasks/title/completions | Generate Title|
|[**getTaskConfigApiV1TasksConfigGet**](#gettaskconfigapiv1tasksconfigget) | **GET** /api/v1/tasks/config | Get Task Config|
|[**updateTaskConfigApiV1TasksConfigUpdatePost**](#updatetaskconfigapiv1tasksconfigupdatepost) | **POST** /api/v1/tasks/config/update | Update Task Config|

# **generateAutocompletionApiV1TasksAutoCompletionsPost**
> any generateAutocompletionApiV1TasksAutoCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateAutocompletionApiV1TasksAutoCompletionsPost(
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

# **generateChatTagsApiV1TasksTagsCompletionsPost**
> any generateChatTagsApiV1TasksTagsCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateChatTagsApiV1TasksTagsCompletionsPost(
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

# **generateEmojiApiV1TasksEmojiCompletionsPost**
> any generateEmojiApiV1TasksEmojiCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateEmojiApiV1TasksEmojiCompletionsPost(
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

# **generateFollowUpsApiV1TasksFollowUpCompletionsPost**
> any generateFollowUpsApiV1TasksFollowUpCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateFollowUpsApiV1TasksFollowUpCompletionsPost(
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

# **generateImagePromptApiV1TasksImagePromptCompletionsPost**
> any generateImagePromptApiV1TasksImagePromptCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateImagePromptApiV1TasksImagePromptCompletionsPost(
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

# **generateMoaResponseApiV1TasksMoaCompletionsPost**
> any generateMoaResponseApiV1TasksMoaCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateMoaResponseApiV1TasksMoaCompletionsPost(
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

# **generateQueriesApiV1TasksQueriesCompletionsPost**
> any generateQueriesApiV1TasksQueriesCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateQueriesApiV1TasksQueriesCompletionsPost(
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

# **generateTitleApiV1TasksTitleCompletionsPost**
> any generateTitleApiV1TasksTitleCompletionsPost(requestBody)


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.generateTitleApiV1TasksTitleCompletionsPost(
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

# **getTaskConfigApiV1TasksConfigGet**
> any getTaskConfigApiV1TasksConfigGet()


### Example

```typescript
import {
    TasksApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

const { status, data } = await apiInstance.getTaskConfigApiV1TasksConfigGet();
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

# **updateTaskConfigApiV1TasksConfigUpdatePost**
> any updateTaskConfigApiV1TasksConfigUpdatePost(taskConfigForm)


### Example

```typescript
import {
    TasksApi,
    Configuration,
    TaskConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new TasksApi(configuration);

let taskConfigForm: TaskConfigForm; //

const { status, data } = await apiInstance.updateTaskConfigApiV1TasksConfigUpdatePost(
    taskConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskConfigForm** | **TaskConfigForm**|  | |


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

