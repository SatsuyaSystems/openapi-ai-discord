# WebConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ENABLE_WEB_SEARCH** | **boolean** |  | [optional] [default to undefined]
**WEB_SEARCH_ENGINE** | **string** |  | [optional] [default to undefined]
**WEB_SEARCH_TRUST_ENV** | **boolean** |  | [optional] [default to undefined]
**WEB_SEARCH_RESULT_COUNT** | **number** |  | [optional] [default to undefined]
**WEB_SEARCH_CONCURRENT_REQUESTS** | **number** |  | [optional] [default to undefined]
**WEB_LOADER_CONCURRENT_REQUESTS** | **number** |  | [optional] [default to undefined]
**WEB_SEARCH_DOMAIN_FILTER_LIST** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**BYPASS_WEB_SEARCH_EMBEDDING_AND_RETRIEVAL** | **boolean** |  | [optional] [default to undefined]
**BYPASS_WEB_SEARCH_WEB_LOADER** | **boolean** |  | [optional] [default to undefined]
**OLLAMA_CLOUD_WEB_SEARCH_API_KEY** | **string** |  | [optional] [default to undefined]
**SEARXNG_QUERY_URL** | **string** |  | [optional] [default to undefined]
**YACY_QUERY_URL** | **string** |  | [optional] [default to undefined]
**YACY_USERNAME** | **string** |  | [optional] [default to undefined]
**YACY_PASSWORD** | **string** |  | [optional] [default to undefined]
**GOOGLE_PSE_API_KEY** | **string** |  | [optional] [default to undefined]
**GOOGLE_PSE_ENGINE_ID** | **string** |  | [optional] [default to undefined]
**BRAVE_SEARCH_API_KEY** | **string** |  | [optional] [default to undefined]
**KAGI_SEARCH_API_KEY** | **string** |  | [optional] [default to undefined]
**MOJEEK_SEARCH_API_KEY** | **string** |  | [optional] [default to undefined]
**BOCHA_SEARCH_API_KEY** | **string** |  | [optional] [default to undefined]
**SERPSTACK_API_KEY** | **string** |  | [optional] [default to undefined]
**SERPSTACK_HTTPS** | **boolean** |  | [optional] [default to undefined]
**SERPER_API_KEY** | **string** |  | [optional] [default to undefined]
**SERPLY_API_KEY** | **string** |  | [optional] [default to undefined]
**TAVILY_API_KEY** | **string** |  | [optional] [default to undefined]
**SEARCHAPI_API_KEY** | **string** |  | [optional] [default to undefined]
**SEARCHAPI_ENGINE** | **string** |  | [optional] [default to undefined]
**SERPAPI_API_KEY** | **string** |  | [optional] [default to undefined]
**SERPAPI_ENGINE** | **string** |  | [optional] [default to undefined]
**JINA_API_KEY** | **string** |  | [optional] [default to undefined]
**BING_SEARCH_V7_ENDPOINT** | **string** |  | [optional] [default to undefined]
**BING_SEARCH_V7_SUBSCRIPTION_KEY** | **string** |  | [optional] [default to undefined]
**EXA_API_KEY** | **string** |  | [optional] [default to undefined]
**PERPLEXITY_API_KEY** | **string** |  | [optional] [default to undefined]
**PERPLEXITY_MODEL** | **string** |  | [optional] [default to undefined]
**PERPLEXITY_SEARCH_CONTEXT_USAGE** | **string** |  | [optional] [default to undefined]
**SOUGOU_API_SID** | **string** |  | [optional] [default to undefined]
**SOUGOU_API_SK** | **string** |  | [optional] [default to undefined]
**WEB_LOADER_ENGINE** | **string** |  | [optional] [default to undefined]
**ENABLE_WEB_LOADER_SSL_VERIFICATION** | **boolean** |  | [optional] [default to undefined]
**PLAYWRIGHT_WS_URL** | **string** |  | [optional] [default to undefined]
**PLAYWRIGHT_TIMEOUT** | **number** |  | [optional] [default to undefined]
**FIRECRAWL_API_KEY** | **string** |  | [optional] [default to undefined]
**FIRECRAWL_API_BASE_URL** | **string** |  | [optional] [default to undefined]
**TAVILY_EXTRACT_DEPTH** | **string** |  | [optional] [default to undefined]
**EXTERNAL_WEB_SEARCH_URL** | **string** |  | [optional] [default to undefined]
**EXTERNAL_WEB_SEARCH_API_KEY** | **string** |  | [optional] [default to undefined]
**EXTERNAL_WEB_LOADER_URL** | **string** |  | [optional] [default to undefined]
**EXTERNAL_WEB_LOADER_API_KEY** | **string** |  | [optional] [default to undefined]
**YOUTUBE_LOADER_LANGUAGE** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**YOUTUBE_LOADER_PROXY_URL** | **string** |  | [optional] [default to undefined]
**YOUTUBE_LOADER_TRANSLATION** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { WebConfig } from './api';

const instance: WebConfig = {
    ENABLE_WEB_SEARCH,
    WEB_SEARCH_ENGINE,
    WEB_SEARCH_TRUST_ENV,
    WEB_SEARCH_RESULT_COUNT,
    WEB_SEARCH_CONCURRENT_REQUESTS,
    WEB_LOADER_CONCURRENT_REQUESTS,
    WEB_SEARCH_DOMAIN_FILTER_LIST,
    BYPASS_WEB_SEARCH_EMBEDDING_AND_RETRIEVAL,
    BYPASS_WEB_SEARCH_WEB_LOADER,
    OLLAMA_CLOUD_WEB_SEARCH_API_KEY,
    SEARXNG_QUERY_URL,
    YACY_QUERY_URL,
    YACY_USERNAME,
    YACY_PASSWORD,
    GOOGLE_PSE_API_KEY,
    GOOGLE_PSE_ENGINE_ID,
    BRAVE_SEARCH_API_KEY,
    KAGI_SEARCH_API_KEY,
    MOJEEK_SEARCH_API_KEY,
    BOCHA_SEARCH_API_KEY,
    SERPSTACK_API_KEY,
    SERPSTACK_HTTPS,
    SERPER_API_KEY,
    SERPLY_API_KEY,
    TAVILY_API_KEY,
    SEARCHAPI_API_KEY,
    SEARCHAPI_ENGINE,
    SERPAPI_API_KEY,
    SERPAPI_ENGINE,
    JINA_API_KEY,
    BING_SEARCH_V7_ENDPOINT,
    BING_SEARCH_V7_SUBSCRIPTION_KEY,
    EXA_API_KEY,
    PERPLEXITY_API_KEY,
    PERPLEXITY_MODEL,
    PERPLEXITY_SEARCH_CONTEXT_USAGE,
    SOUGOU_API_SID,
    SOUGOU_API_SK,
    WEB_LOADER_ENGINE,
    ENABLE_WEB_LOADER_SSL_VERIFICATION,
    PLAYWRIGHT_WS_URL,
    PLAYWRIGHT_TIMEOUT,
    FIRECRAWL_API_KEY,
    FIRECRAWL_API_BASE_URL,
    TAVILY_EXTRACT_DEPTH,
    EXTERNAL_WEB_SEARCH_URL,
    EXTERNAL_WEB_SEARCH_API_KEY,
    EXTERNAL_WEB_LOADER_URL,
    EXTERNAL_WEB_LOADER_API_KEY,
    YOUTUBE_LOADER_LANGUAGE,
    YOUTUBE_LOADER_PROXY_URL,
    YOUTUBE_LOADER_TRANSLATION,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
