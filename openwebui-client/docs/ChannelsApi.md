# ChannelsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost**](#addreactiontomessageapiv1channelsidmessagesmessageidreactionsaddpost) | **POST** /api/v1/channels/{id}/messages/{message_id}/reactions/add | Add Reaction To Message|
|[**createNewChannelApiV1ChannelsCreatePost**](#createnewchannelapiv1channelscreatepost) | **POST** /api/v1/channels/create | Create New Channel|
|[**deleteChannelByIdApiV1ChannelsIdDeleteDelete**](#deletechannelbyidapiv1channelsiddeletedelete) | **DELETE** /api/v1/channels/{id}/delete | Delete Channel By Id|
|[**deleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete**](#deletemessagebyidapiv1channelsidmessagesmessageiddeletedelete) | **DELETE** /api/v1/channels/{id}/messages/{message_id}/delete | Delete Message By Id|
|[**getAllChannelsApiV1ChannelsListGet**](#getallchannelsapiv1channelslistget) | **GET** /api/v1/channels/list | Get All Channels|
|[**getChannelByIdApiV1ChannelsIdGet**](#getchannelbyidapiv1channelsidget) | **GET** /api/v1/channels/{id} | Get Channel By Id|
|[**getChannelMessageApiV1ChannelsIdMessagesMessageIdGet**](#getchannelmessageapiv1channelsidmessagesmessageidget) | **GET** /api/v1/channels/{id}/messages/{message_id} | Get Channel Message|
|[**getChannelMessagesApiV1ChannelsIdMessagesGet**](#getchannelmessagesapiv1channelsidmessagesget) | **GET** /api/v1/channels/{id}/messages | Get Channel Messages|
|[**getChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet**](#getchannelthreadmessagesapiv1channelsidmessagesmessageidthreadget) | **GET** /api/v1/channels/{id}/messages/{message_id}/thread | Get Channel Thread Messages|
|[**getChannelsApiV1ChannelsGet**](#getchannelsapiv1channelsget) | **GET** /api/v1/channels/ | Get Channels|
|[**postNewMessageApiV1ChannelsIdMessagesPostPost**](#postnewmessageapiv1channelsidmessagespostpost) | **POST** /api/v1/channels/{id}/messages/post | Post New Message|
|[**removeReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost**](#removereactionbyidanduseridandnameapiv1channelsidmessagesmessageidreactionsremovepost) | **POST** /api/v1/channels/{id}/messages/{message_id}/reactions/remove | Remove Reaction By Id And User Id And Name|
|[**updateChannelByIdApiV1ChannelsIdUpdatePost**](#updatechannelbyidapiv1channelsidupdatepost) | **POST** /api/v1/channels/{id}/update | Update Channel By Id|
|[**updateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost**](#updatemessagebyidapiv1channelsidmessagesmessageidupdatepost) | **POST** /api/v1/channels/{id}/messages/{message_id}/update | Update Message By Id|

# **addReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost**
> boolean addReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost(reactionForm)


### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    ReactionForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)
let reactionForm: ReactionForm; //

const { status, data } = await apiInstance.addReactionToMessageApiV1ChannelsIdMessagesMessageIdReactionsAddPost(
    id,
    messageId,
    reactionForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reactionForm** | **ReactionForm**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **createNewChannelApiV1ChannelsCreatePost**
> ChannelModel createNewChannelApiV1ChannelsCreatePost(channelForm)


### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    ChannelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let channelForm: ChannelForm; //

const { status, data } = await apiInstance.createNewChannelApiV1ChannelsCreatePost(
    channelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelForm** | **ChannelForm**|  | |


### Return type

**ChannelModel**

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

# **deleteChannelByIdApiV1ChannelsIdDeleteDelete**
> boolean deleteChannelByIdApiV1ChannelsIdDeleteDelete()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteChannelByIdApiV1ChannelsIdDeleteDelete(
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

# **deleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete**
> boolean deleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteMessageByIdApiV1ChannelsIdMessagesMessageIdDeleteDelete(
    id,
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


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

# **getAllChannelsApiV1ChannelsListGet**
> Array<ChannelModel> getAllChannelsApiV1ChannelsListGet()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

const { status, data } = await apiInstance.getAllChannelsApiV1ChannelsListGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChannelModel>**

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

# **getChannelByIdApiV1ChannelsIdGet**
> ChannelResponse getChannelByIdApiV1ChannelsIdGet()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getChannelByIdApiV1ChannelsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChannelResponse**

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

# **getChannelMessageApiV1ChannelsIdMessagesMessageIdGet**
> OpenWebuiRoutersChannelsMessageUserResponse getChannelMessageApiV1ChannelsIdMessagesMessageIdGet()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.getChannelMessageApiV1ChannelsIdMessagesMessageIdGet(
    id,
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**OpenWebuiRoutersChannelsMessageUserResponse**

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

# **getChannelMessagesApiV1ChannelsIdMessagesGet**
> Array<OpenWebuiRoutersChannelsMessageUserResponse> getChannelMessagesApiV1ChannelsIdMessagesGet()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getChannelMessagesApiV1ChannelsIdMessagesGet(
    id,
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**Array<OpenWebuiRoutersChannelsMessageUserResponse>**

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

# **getChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet**
> Array<OpenWebuiRoutersChannelsMessageUserResponse> getChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)
let skip: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getChannelThreadMessagesApiV1ChannelsIdMessagesMessageIdThreadGet(
    id,
    messageId,
    skip,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|
| **skip** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**Array<OpenWebuiRoutersChannelsMessageUserResponse>**

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

# **getChannelsApiV1ChannelsGet**
> Array<ChannelModel> getChannelsApiV1ChannelsGet()


### Example

```typescript
import {
    ChannelsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

const { status, data } = await apiInstance.getChannelsApiV1ChannelsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChannelModel>**

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

# **postNewMessageApiV1ChannelsIdMessagesPostPost**
> MessageModel postNewMessageApiV1ChannelsIdMessagesPostPost(openWebuiModelsMessagesMessageForm)


### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    OpenWebuiModelsMessagesMessageForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let openWebuiModelsMessagesMessageForm: OpenWebuiModelsMessagesMessageForm; //

const { status, data } = await apiInstance.postNewMessageApiV1ChannelsIdMessagesPostPost(
    id,
    openWebuiModelsMessagesMessageForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiModelsMessagesMessageForm** | **OpenWebuiModelsMessagesMessageForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**MessageModel**

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

# **removeReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost**
> boolean removeReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost(reactionForm)


### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    ReactionForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)
let reactionForm: ReactionForm; //

const { status, data } = await apiInstance.removeReactionByIdAndUserIdAndNameApiV1ChannelsIdMessagesMessageIdReactionsRemovePost(
    id,
    messageId,
    reactionForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reactionForm** | **ReactionForm**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **updateChannelByIdApiV1ChannelsIdUpdatePost**
> ChannelModel updateChannelByIdApiV1ChannelsIdUpdatePost(channelForm)


### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    ChannelForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let channelForm: ChannelForm; //

const { status, data } = await apiInstance.updateChannelByIdApiV1ChannelsIdUpdatePost(
    id,
    channelForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **channelForm** | **ChannelForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChannelModel**

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

# **updateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost**
> MessageModel updateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost(openWebuiModelsMessagesMessageForm)


### Example

```typescript
import {
    ChannelsApi,
    Configuration,
    OpenWebuiModelsMessagesMessageForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChannelsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)
let openWebuiModelsMessagesMessageForm: OpenWebuiModelsMessagesMessageForm; //

const { status, data } = await apiInstance.updateMessageByIdApiV1ChannelsIdMessagesMessageIdUpdatePost(
    id,
    messageId,
    openWebuiModelsMessagesMessageForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiModelsMessagesMessageForm** | **OpenWebuiModelsMessagesMessageForm**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**MessageModel**

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

