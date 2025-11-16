# EvaluationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFeedbackApiV1EvaluationsFeedbackPost**](#createfeedbackapiv1evaluationsfeedbackpost) | **POST** /api/v1/evaluations/feedback | Create Feedback|
|[**deleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete**](#deleteallfeedbacksapiv1evaluationsfeedbacksalldelete) | **DELETE** /api/v1/evaluations/feedbacks/all | Delete All Feedbacks|
|[**deleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete**](#deletefeedbackbyidapiv1evaluationsfeedbackiddelete) | **DELETE** /api/v1/evaluations/feedback/{id} | Delete Feedback By Id|
|[**deleteFeedbacksApiV1EvaluationsFeedbacksDelete**](#deletefeedbacksapiv1evaluationsfeedbacksdelete) | **DELETE** /api/v1/evaluations/feedbacks | Delete Feedbacks|
|[**getAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet**](#getallfeedbacksapiv1evaluationsfeedbacksallexportget) | **GET** /api/v1/evaluations/feedbacks/all/export | Get All Feedbacks|
|[**getAllFeedbacksApiV1EvaluationsFeedbacksAllGet**](#getallfeedbacksapiv1evaluationsfeedbacksallget) | **GET** /api/v1/evaluations/feedbacks/all | Get All Feedbacks|
|[**getConfigApiV1EvaluationsConfigGet**](#getconfigapiv1evaluationsconfigget) | **GET** /api/v1/evaluations/config | Get Config|
|[**getFeedbackByIdApiV1EvaluationsFeedbackIdGet**](#getfeedbackbyidapiv1evaluationsfeedbackidget) | **GET** /api/v1/evaluations/feedback/{id} | Get Feedback By Id|
|[**getFeedbacksApiV1EvaluationsFeedbacksUserGet**](#getfeedbacksapiv1evaluationsfeedbacksuserget) | **GET** /api/v1/evaluations/feedbacks/user | Get Feedbacks|
|[**updateConfigApiV1EvaluationsConfigPost**](#updateconfigapiv1evaluationsconfigpost) | **POST** /api/v1/evaluations/config | Update Config|
|[**updateFeedbackByIdApiV1EvaluationsFeedbackIdPost**](#updatefeedbackbyidapiv1evaluationsfeedbackidpost) | **POST** /api/v1/evaluations/feedback/{id} | Update Feedback By Id|

# **createFeedbackApiV1EvaluationsFeedbackPost**
> FeedbackModel createFeedbackApiV1EvaluationsFeedbackPost(feedbackForm)


### Example

```typescript
import {
    EvaluationsApi,
    Configuration,
    FeedbackForm
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

let feedbackForm: FeedbackForm; //

const { status, data } = await apiInstance.createFeedbackApiV1EvaluationsFeedbackPost(
    feedbackForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackForm** | **FeedbackForm**|  | |


### Return type

**FeedbackModel**

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

# **deleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete**
> any deleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

const { status, data } = await apiInstance.deleteAllFeedbacksApiV1EvaluationsFeedbacksAllDelete();
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

# **deleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete**
> any deleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteFeedbackByIdApiV1EvaluationsFeedbackIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **deleteFeedbacksApiV1EvaluationsFeedbacksDelete**
> boolean deleteFeedbacksApiV1EvaluationsFeedbacksDelete()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

const { status, data } = await apiInstance.deleteFeedbacksApiV1EvaluationsFeedbacksDelete();
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

# **getAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet**
> Array<FeedbackModel> getAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

const { status, data } = await apiInstance.getAllFeedbacksApiV1EvaluationsFeedbacksAllExportGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FeedbackModel>**

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

# **getAllFeedbacksApiV1EvaluationsFeedbacksAllGet**
> Array<FeedbackUserResponse> getAllFeedbacksApiV1EvaluationsFeedbacksAllGet()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

const { status, data } = await apiInstance.getAllFeedbacksApiV1EvaluationsFeedbacksAllGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FeedbackUserResponse>**

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

# **getConfigApiV1EvaluationsConfigGet**
> any getConfigApiV1EvaluationsConfigGet()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

const { status, data } = await apiInstance.getConfigApiV1EvaluationsConfigGet();
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

# **getFeedbackByIdApiV1EvaluationsFeedbackIdGet**
> FeedbackModel getFeedbackByIdApiV1EvaluationsFeedbackIdGet()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getFeedbackByIdApiV1EvaluationsFeedbackIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FeedbackModel**

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

# **getFeedbacksApiV1EvaluationsFeedbacksUserGet**
> Array<FeedbackUserResponse> getFeedbacksApiV1EvaluationsFeedbacksUserGet()


### Example

```typescript
import {
    EvaluationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

const { status, data } = await apiInstance.getFeedbacksApiV1EvaluationsFeedbacksUserGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FeedbackUserResponse>**

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

# **updateConfigApiV1EvaluationsConfigPost**
> any updateConfigApiV1EvaluationsConfigPost(updateConfigForm)


### Example

```typescript
import {
    EvaluationsApi,
    Configuration,
    UpdateConfigForm
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

let updateConfigForm: UpdateConfigForm; //

const { status, data } = await apiInstance.updateConfigApiV1EvaluationsConfigPost(
    updateConfigForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateConfigForm** | **UpdateConfigForm**|  | |


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

# **updateFeedbackByIdApiV1EvaluationsFeedbackIdPost**
> FeedbackModel updateFeedbackByIdApiV1EvaluationsFeedbackIdPost(feedbackForm)


### Example

```typescript
import {
    EvaluationsApi,
    Configuration,
    FeedbackForm
} from './api';

const configuration = new Configuration();
const apiInstance = new EvaluationsApi(configuration);

let id: string; // (default to undefined)
let feedbackForm: FeedbackForm; //

const { status, data } = await apiInstance.updateFeedbackByIdApiV1EvaluationsFeedbackIdPost(
    id,
    feedbackForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **feedbackForm** | **FeedbackForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FeedbackModel**

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

