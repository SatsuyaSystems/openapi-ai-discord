# ChatsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTagByIdAndTagNameApiV1ChatsIdTagsPost**](#addtagbyidandtagnameapiv1chatsidtagspost) | **POST** /api/v1/chats/{id}/tags | Add Tag By Id And Tag Name|
|[**archiveAllChatsApiV1ChatsArchiveAllPost**](#archiveallchatsapiv1chatsarchiveallpost) | **POST** /api/v1/chats/archive/all | Archive All Chats|
|[**archiveChatByIdApiV1ChatsIdArchivePost**](#archivechatbyidapiv1chatsidarchivepost) | **POST** /api/v1/chats/{id}/archive | Archive Chat By Id|
|[**cloneChatByIdApiV1ChatsIdClonePost**](#clonechatbyidapiv1chatsidclonepost) | **POST** /api/v1/chats/{id}/clone | Clone Chat By Id|
|[**cloneSharedChatByIdApiV1ChatsIdCloneSharedPost**](#clonesharedchatbyidapiv1chatsidclonesharedpost) | **POST** /api/v1/chats/{id}/clone/shared | Clone Shared Chat By Id|
|[**createNewChatApiV1ChatsNewPost**](#createnewchatapiv1chatsnewpost) | **POST** /api/v1/chats/new | Create New Chat|
|[**deleteAllTagsByIdApiV1ChatsIdTagsAllDelete**](#deletealltagsbyidapiv1chatsidtagsalldelete) | **DELETE** /api/v1/chats/{id}/tags/all | Delete All Tags By Id|
|[**deleteAllUserChatsApiV1ChatsDelete**](#deletealluserchatsapiv1chatsdelete) | **DELETE** /api/v1/chats/ | Delete All User Chats|
|[**deleteChatByIdApiV1ChatsIdDelete**](#deletechatbyidapiv1chatsiddelete) | **DELETE** /api/v1/chats/{id} | Delete Chat By Id|
|[**deleteSharedChatByIdApiV1ChatsIdShareDelete**](#deletesharedchatbyidapiv1chatsidsharedelete) | **DELETE** /api/v1/chats/{id}/share | Delete Shared Chat By Id|
|[**deleteTagByIdAndTagNameApiV1ChatsIdTagsDelete**](#deletetagbyidandtagnameapiv1chatsidtagsdelete) | **DELETE** /api/v1/chats/{id}/tags | Delete Tag By Id And Tag Name|
|[**getAllUserChatsInDbApiV1ChatsAllDbGet**](#getalluserchatsindbapiv1chatsalldbget) | **GET** /api/v1/chats/all/db | Get All User Chats In Db|
|[**getAllUserTagsApiV1ChatsAllTagsGet**](#getallusertagsapiv1chatsalltagsget) | **GET** /api/v1/chats/all/tags | Get All User Tags|
|[**getArchivedSessionUserChatListApiV1ChatsArchivedGet**](#getarchivedsessionuserchatlistapiv1chatsarchivedget) | **GET** /api/v1/chats/archived | Get Archived Session User Chat List|
|[**getChatByIdApiV1ChatsIdGet**](#getchatbyidapiv1chatsidget) | **GET** /api/v1/chats/{id} | Get Chat By Id|
|[**getChatListByFolderIdApiV1ChatsFolderFolderIdListGet**](#getchatlistbyfolderidapiv1chatsfolderfolderidlistget) | **GET** /api/v1/chats/folder/{folder_id}/list | Get Chat List By Folder Id|
|[**getChatTagsByIdApiV1ChatsIdTagsGet**](#getchattagsbyidapiv1chatsidtagsget) | **GET** /api/v1/chats/{id}/tags | Get Chat Tags By Id|
|[**getChatsByFolderIdApiV1ChatsFolderFolderIdGet**](#getchatsbyfolderidapiv1chatsfolderfolderidget) | **GET** /api/v1/chats/folder/{folder_id} | Get Chats By Folder Id|
|[**getPinnedStatusByIdApiV1ChatsIdPinnedGet**](#getpinnedstatusbyidapiv1chatsidpinnedget) | **GET** /api/v1/chats/{id}/pinned | Get Pinned Status By Id|
|[**getSessionUserChatListApiV1ChatsGet**](#getsessionuserchatlistapiv1chatsget) | **GET** /api/v1/chats/ | Get Session User Chat List|
|[**getSessionUserChatListApiV1ChatsListGet**](#getsessionuserchatlistapiv1chatslistget) | **GET** /api/v1/chats/list | Get Session User Chat List|
|[**getSharedChatByIdApiV1ChatsShareShareIdGet**](#getsharedchatbyidapiv1chatsshareshareidget) | **GET** /api/v1/chats/share/{share_id} | Get Shared Chat By Id|
|[**getUserArchivedChatsApiV1ChatsAllArchivedGet**](#getuserarchivedchatsapiv1chatsallarchivedget) | **GET** /api/v1/chats/all/archived | Get User Archived Chats|
|[**getUserChatListByTagNameApiV1ChatsTagsPost**](#getuserchatlistbytagnameapiv1chatstagspost) | **POST** /api/v1/chats/tags | Get User Chat List By Tag Name|
|[**getUserChatListByUserIdApiV1ChatsListUserUserIdGet**](#getuserchatlistbyuseridapiv1chatslistuseruseridget) | **GET** /api/v1/chats/list/user/{user_id} | Get User Chat List By User Id|
|[**getUserChatsApiV1ChatsAllGet**](#getuserchatsapiv1chatsallget) | **GET** /api/v1/chats/all | Get User Chats|
|[**getUserPinnedChatsApiV1ChatsPinnedGet**](#getuserpinnedchatsapiv1chatspinnedget) | **GET** /api/v1/chats/pinned | Get User Pinned Chats|
|[**importChatApiV1ChatsImportPost**](#importchatapiv1chatsimportpost) | **POST** /api/v1/chats/import | Import Chat|
|[**pinChatByIdApiV1ChatsIdPinPost**](#pinchatbyidapiv1chatsidpinpost) | **POST** /api/v1/chats/{id}/pin | Pin Chat By Id|
|[**searchUserChatsApiV1ChatsSearchGet**](#searchuserchatsapiv1chatssearchget) | **GET** /api/v1/chats/search | Search User Chats|
|[**sendChatMessageEventByIdApiV1ChatsIdMessagesMessageIdEventPost**](#sendchatmessageeventbyidapiv1chatsidmessagesmessageideventpost) | **POST** /api/v1/chats/{id}/messages/{message_id}/event | Send Chat Message Event By Id|
|[**shareChatByIdApiV1ChatsIdSharePost**](#sharechatbyidapiv1chatsidsharepost) | **POST** /api/v1/chats/{id}/share | Share Chat By Id|
|[**unarchiveAllChatsApiV1ChatsUnarchiveAllPost**](#unarchiveallchatsapiv1chatsunarchiveallpost) | **POST** /api/v1/chats/unarchive/all | Unarchive All Chats|
|[**updateChatByIdApiV1ChatsIdPost**](#updatechatbyidapiv1chatsidpost) | **POST** /api/v1/chats/{id} | Update Chat By Id|
|[**updateChatFolderIdByIdApiV1ChatsIdFolderPost**](#updatechatfolderidbyidapiv1chatsidfolderpost) | **POST** /api/v1/chats/{id}/folder | Update Chat Folder Id By Id|
|[**updateChatMessageByIdApiV1ChatsIdMessagesMessageIdPost**](#updatechatmessagebyidapiv1chatsidmessagesmessageidpost) | **POST** /api/v1/chats/{id}/messages/{message_id} | Update Chat Message By Id|

# **addTagByIdAndTagNameApiV1ChatsIdTagsPost**
> Array<TagModel> addTagByIdAndTagNameApiV1ChatsIdTagsPost(tagForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    TagForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let tagForm: TagForm; //

const { status, data } = await apiInstance.addTagByIdAndTagNameApiV1ChatsIdTagsPost(
    id,
    tagForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagForm** | **TagForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Array<TagModel>**

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

# **archiveAllChatsApiV1ChatsArchiveAllPost**
> boolean archiveAllChatsApiV1ChatsArchiveAllPost()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.archiveAllChatsApiV1ChatsArchiveAllPost();
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

# **archiveChatByIdApiV1ChatsIdArchivePost**
> ChatResponse archiveChatByIdApiV1ChatsIdArchivePost()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.archiveChatByIdApiV1ChatsIdArchivePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **cloneChatByIdApiV1ChatsIdClonePost**
> ChatResponse cloneChatByIdApiV1ChatsIdClonePost(cloneForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    CloneForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let cloneForm: CloneForm; //

const { status, data } = await apiInstance.cloneChatByIdApiV1ChatsIdClonePost(
    id,
    cloneForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cloneForm** | **CloneForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **cloneSharedChatByIdApiV1ChatsIdCloneSharedPost**
> ChatResponse cloneSharedChatByIdApiV1ChatsIdCloneSharedPost()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cloneSharedChatByIdApiV1ChatsIdCloneSharedPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **createNewChatApiV1ChatsNewPost**
> ChatResponse createNewChatApiV1ChatsNewPost(chatForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    ChatForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let chatForm: ChatForm; //

const { status, data } = await apiInstance.createNewChatApiV1ChatsNewPost(
    chatForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatForm** | **ChatForm**|  | |


### Return type

**ChatResponse**

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

# **deleteAllTagsByIdApiV1ChatsIdTagsAllDelete**
> boolean deleteAllTagsByIdApiV1ChatsIdTagsAllDelete()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAllTagsByIdApiV1ChatsIdTagsAllDelete(
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

# **deleteAllUserChatsApiV1ChatsDelete**
> boolean deleteAllUserChatsApiV1ChatsDelete()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.deleteAllUserChatsApiV1ChatsDelete();
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

# **deleteChatByIdApiV1ChatsIdDelete**
> boolean deleteChatByIdApiV1ChatsIdDelete()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteChatByIdApiV1ChatsIdDelete(
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

# **deleteSharedChatByIdApiV1ChatsIdShareDelete**
> boolean deleteSharedChatByIdApiV1ChatsIdShareDelete()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteSharedChatByIdApiV1ChatsIdShareDelete(
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

# **deleteTagByIdAndTagNameApiV1ChatsIdTagsDelete**
> Array<TagModel> deleteTagByIdAndTagNameApiV1ChatsIdTagsDelete(tagForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    TagForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let tagForm: TagForm; //

const { status, data } = await apiInstance.deleteTagByIdAndTagNameApiV1ChatsIdTagsDelete(
    id,
    tagForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagForm** | **TagForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Array<TagModel>**

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

# **getAllUserChatsInDbApiV1ChatsAllDbGet**
> Array<ChatResponse> getAllUserChatsInDbApiV1ChatsAllDbGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.getAllUserChatsInDbApiV1ChatsAllDbGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChatResponse>**

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

# **getAllUserTagsApiV1ChatsAllTagsGet**
> Array<TagModel> getAllUserTagsApiV1ChatsAllTagsGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.getAllUserTagsApiV1ChatsAllTagsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TagModel>**

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

# **getArchivedSessionUserChatListApiV1ChatsArchivedGet**
> Array<ChatTitleIdResponse> getArchivedSessionUserChatListApiV1ChatsArchivedGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let page: number; // (optional) (default to undefined)
let query: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let direction: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getArchivedSessionUserChatListApiV1ChatsArchivedGet(
    page,
    query,
    orderBy,
    direction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **query** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **direction** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatTitleIdResponse>**

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

# **getChatByIdApiV1ChatsIdGet**
> ChatResponse getChatByIdApiV1ChatsIdGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getChatByIdApiV1ChatsIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **getChatListByFolderIdApiV1ChatsFolderFolderIdListGet**
> any getChatListByFolderIdApiV1ChatsFolderFolderIdListGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let folderId: string; // (default to undefined)
let page: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getChatListByFolderIdApiV1ChatsFolderFolderIdListGet(
    folderId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|


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

# **getChatTagsByIdApiV1ChatsIdTagsGet**
> Array<TagModel> getChatTagsByIdApiV1ChatsIdTagsGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getChatTagsByIdApiV1ChatsIdTagsGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Array<TagModel>**

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

# **getChatsByFolderIdApiV1ChatsFolderFolderIdGet**
> Array<ChatResponse> getChatsByFolderIdApiV1ChatsFolderFolderIdGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let folderId: string; // (default to undefined)

const { status, data } = await apiInstance.getChatsByFolderIdApiV1ChatsFolderFolderIdGet(
    folderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **folderId** | [**string**] |  | defaults to undefined|


### Return type

**Array<ChatResponse>**

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

# **getPinnedStatusByIdApiV1ChatsIdPinnedGet**
> boolean getPinnedStatusByIdApiV1ChatsIdPinnedGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getPinnedStatusByIdApiV1ChatsIdPinnedGet(
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

# **getSessionUserChatListApiV1ChatsGet**
> Array<ChatTitleIdResponse> getSessionUserChatListApiV1ChatsGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let page: number; // (optional) (default to undefined)
let includePinned: boolean; // (optional) (default to undefined)
let includeFolders: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSessionUserChatListApiV1ChatsGet(
    page,
    includePinned,
    includeFolders
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **includePinned** | [**boolean**] |  | (optional) defaults to undefined|
| **includeFolders** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatTitleIdResponse>**

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

# **getSessionUserChatListApiV1ChatsListGet**
> Array<ChatTitleIdResponse> getSessionUserChatListApiV1ChatsListGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let page: number; // (optional) (default to undefined)
let includePinned: boolean; // (optional) (default to undefined)
let includeFolders: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSessionUserChatListApiV1ChatsListGet(
    page,
    includePinned,
    includeFolders
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **includePinned** | [**boolean**] |  | (optional) defaults to undefined|
| **includeFolders** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatTitleIdResponse>**

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

# **getSharedChatByIdApiV1ChatsShareShareIdGet**
> ChatResponse getSharedChatByIdApiV1ChatsShareShareIdGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let shareId: string; // (default to undefined)

const { status, data } = await apiInstance.getSharedChatByIdApiV1ChatsShareShareIdGet(
    shareId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shareId** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **getUserArchivedChatsApiV1ChatsAllArchivedGet**
> Array<ChatResponse> getUserArchivedChatsApiV1ChatsAllArchivedGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.getUserArchivedChatsApiV1ChatsAllArchivedGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChatResponse>**

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

# **getUserChatListByTagNameApiV1ChatsTagsPost**
> Array<ChatTitleIdResponse> getUserChatListByTagNameApiV1ChatsTagsPost(tagFilterForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    TagFilterForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let tagFilterForm: TagFilterForm; //

const { status, data } = await apiInstance.getUserChatListByTagNameApiV1ChatsTagsPost(
    tagFilterForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tagFilterForm** | **TagFilterForm**|  | |


### Return type

**Array<ChatTitleIdResponse>**

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

# **getUserChatListByUserIdApiV1ChatsListUserUserIdGet**
> Array<ChatTitleIdResponse> getUserChatListByUserIdApiV1ChatsListUserUserIdGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let userId: string; // (default to undefined)
let page: number; // (optional) (default to undefined)
let query: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let direction: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUserChatListByUserIdApiV1ChatsListUserUserIdGet(
    userId,
    page,
    query,
    orderBy,
    direction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **query** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **direction** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatTitleIdResponse>**

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

# **getUserChatsApiV1ChatsAllGet**
> Array<ChatResponse> getUserChatsApiV1ChatsAllGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.getUserChatsApiV1ChatsAllGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChatResponse>**

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

# **getUserPinnedChatsApiV1ChatsPinnedGet**
> Array<ChatTitleIdResponse> getUserPinnedChatsApiV1ChatsPinnedGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.getUserPinnedChatsApiV1ChatsPinnedGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChatTitleIdResponse>**

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

# **importChatApiV1ChatsImportPost**
> ChatResponse importChatApiV1ChatsImportPost(chatImportForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    ChatImportForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let chatImportForm: ChatImportForm; //

const { status, data } = await apiInstance.importChatApiV1ChatsImportPost(
    chatImportForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatImportForm** | **ChatImportForm**|  | |


### Return type

**ChatResponse**

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

# **pinChatByIdApiV1ChatsIdPinPost**
> ChatResponse pinChatByIdApiV1ChatsIdPinPost()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.pinChatByIdApiV1ChatsIdPinPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **searchUserChatsApiV1ChatsSearchGet**
> Array<ChatTitleIdResponse> searchUserChatsApiV1ChatsSearchGet()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let text: string; // (default to undefined)
let page: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchUserChatsApiV1ChatsSearchGet(
    text,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **text** | [**string**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<ChatTitleIdResponse>**

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

# **sendChatMessageEventByIdApiV1ChatsIdMessagesMessageIdEventPost**
> boolean sendChatMessageEventByIdApiV1ChatsIdMessagesMessageIdEventPost(eventForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    EventForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)
let eventForm: EventForm; //

const { status, data } = await apiInstance.sendChatMessageEventByIdApiV1ChatsIdMessagesMessageIdEventPost(
    id,
    messageId,
    eventForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventForm** | **EventForm**|  | |
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

# **shareChatByIdApiV1ChatsIdSharePost**
> ChatResponse shareChatByIdApiV1ChatsIdSharePost()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.shareChatByIdApiV1ChatsIdSharePost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **unarchiveAllChatsApiV1ChatsUnarchiveAllPost**
> boolean unarchiveAllChatsApiV1ChatsUnarchiveAllPost()


### Example

```typescript
import {
    ChatsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

const { status, data } = await apiInstance.unarchiveAllChatsApiV1ChatsUnarchiveAllPost();
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

# **updateChatByIdApiV1ChatsIdPost**
> ChatResponse updateChatByIdApiV1ChatsIdPost(chatForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    ChatForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let chatForm: ChatForm; //

const { status, data } = await apiInstance.updateChatByIdApiV1ChatsIdPost(
    id,
    chatForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatForm** | **ChatForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **updateChatFolderIdByIdApiV1ChatsIdFolderPost**
> ChatResponse updateChatFolderIdByIdApiV1ChatsIdFolderPost(chatFolderIdForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    ChatFolderIdForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let chatFolderIdForm: ChatFolderIdForm; //

const { status, data } = await apiInstance.updateChatFolderIdByIdApiV1ChatsIdFolderPost(
    id,
    chatFolderIdForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chatFolderIdForm** | **ChatFolderIdForm**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

# **updateChatMessageByIdApiV1ChatsIdMessagesMessageIdPost**
> ChatResponse updateChatMessageByIdApiV1ChatsIdMessagesMessageIdPost(openWebuiRoutersChatsMessageForm)


### Example

```typescript
import {
    ChatsApi,
    Configuration,
    OpenWebuiRoutersChatsMessageForm
} from './api';

const configuration = new Configuration();
const apiInstance = new ChatsApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)
let openWebuiRoutersChatsMessageForm: OpenWebuiRoutersChatsMessageForm; //

const { status, data } = await apiInstance.updateChatMessageByIdApiV1ChatsIdMessagesMessageIdPost(
    id,
    messageId,
    openWebuiRoutersChatsMessageForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openWebuiRoutersChatsMessageForm** | **OpenWebuiRoutersChatsMessageForm**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**ChatResponse**

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

