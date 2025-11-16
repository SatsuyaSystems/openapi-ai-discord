# ConfigForm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RAG_TEMPLATE** | **string** |  | [optional] [default to undefined]
**TOP_K** | **number** |  | [optional] [default to undefined]
**BYPASS_EMBEDDING_AND_RETRIEVAL** | **boolean** |  | [optional] [default to undefined]
**RAG_FULL_CONTEXT** | **boolean** |  | [optional] [default to undefined]
**ENABLE_RAG_HYBRID_SEARCH** | **boolean** |  | [optional] [default to undefined]
**TOP_K_RERANKER** | **number** |  | [optional] [default to undefined]
**RELEVANCE_THRESHOLD** | **number** |  | [optional] [default to undefined]
**HYBRID_BM25_WEIGHT** | **number** |  | [optional] [default to undefined]
**CONTENT_EXTRACTION_ENGINE** | **string** |  | [optional] [default to undefined]
**PDF_EXTRACT_IMAGES** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_API_KEY** | **string** |  | [optional] [default to undefined]
**DATALAB_MARKER_API_BASE_URL** | **string** |  | [optional] [default to undefined]
**DATALAB_MARKER_ADDITIONAL_CONFIG** | **string** |  | [optional] [default to undefined]
**DATALAB_MARKER_SKIP_CACHE** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_FORCE_OCR** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_PAGINATE** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_STRIP_EXISTING_OCR** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_DISABLE_IMAGE_EXTRACTION** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_FORMAT_LINES** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_USE_LLM** | **boolean** |  | [optional] [default to undefined]
**DATALAB_MARKER_OUTPUT_FORMAT** | **string** |  | [optional] [default to undefined]
**EXTERNAL_DOCUMENT_LOADER_URL** | **string** |  | [optional] [default to undefined]
**EXTERNAL_DOCUMENT_LOADER_API_KEY** | **string** |  | [optional] [default to undefined]
**TIKA_SERVER_URL** | **string** |  | [optional] [default to undefined]
**DOCLING_SERVER_URL** | **string** |  | [optional] [default to undefined]
**DOCLING_PARAMS** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**DOCLING_DO_OCR** | **boolean** |  | [optional] [default to undefined]
**DOCLING_FORCE_OCR** | **boolean** |  | [optional] [default to undefined]
**DOCLING_OCR_ENGINE** | **string** |  | [optional] [default to undefined]
**DOCLING_OCR_LANG** | **string** |  | [optional] [default to undefined]
**DOCLING_PDF_BACKEND** | **string** |  | [optional] [default to undefined]
**DOCLING_TABLE_MODE** | **string** |  | [optional] [default to undefined]
**DOCLING_PIPELINE** | **string** |  | [optional] [default to undefined]
**DOCLING_DO_PICTURE_DESCRIPTION** | **boolean** |  | [optional] [default to undefined]
**DOCLING_PICTURE_DESCRIPTION_MODE** | **string** |  | [optional] [default to undefined]
**DOCLING_PICTURE_DESCRIPTION_LOCAL** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**DOCLING_PICTURE_DESCRIPTION_API** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**DOCUMENT_INTELLIGENCE_ENDPOINT** | **string** |  | [optional] [default to undefined]
**DOCUMENT_INTELLIGENCE_KEY** | **string** |  | [optional] [default to undefined]
**MISTRAL_OCR_API_BASE_URL** | **string** |  | [optional] [default to undefined]
**MISTRAL_OCR_API_KEY** | **string** |  | [optional] [default to undefined]
**MINERU_API_MODE** | **string** |  | [optional] [default to undefined]
**MINERU_API_URL** | **string** |  | [optional] [default to undefined]
**MINERU_API_KEY** | **string** |  | [optional] [default to undefined]
**MINERU_PARAMS** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**RAG_RERANKING_MODEL** | **string** |  | [optional] [default to undefined]
**RAG_RERANKING_ENGINE** | **string** |  | [optional] [default to undefined]
**RAG_EXTERNAL_RERANKER_URL** | **string** |  | [optional] [default to undefined]
**RAG_EXTERNAL_RERANKER_API_KEY** | **string** |  | [optional] [default to undefined]
**TEXT_SPLITTER** | **string** |  | [optional] [default to undefined]
**CHUNK_SIZE** | **number** |  | [optional] [default to undefined]
**CHUNK_OVERLAP** | **number** |  | [optional] [default to undefined]
**FILE_MAX_SIZE** | **number** |  | [optional] [default to undefined]
**FILE_MAX_COUNT** | **number** |  | [optional] [default to undefined]
**FILE_IMAGE_COMPRESSION_WIDTH** | **number** |  | [optional] [default to undefined]
**FILE_IMAGE_COMPRESSION_HEIGHT** | **number** |  | [optional] [default to undefined]
**ALLOWED_FILE_EXTENSIONS** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**ENABLE_GOOGLE_DRIVE_INTEGRATION** | **boolean** |  | [optional] [default to undefined]
**ENABLE_ONEDRIVE_INTEGRATION** | **boolean** |  | [optional] [default to undefined]
**web** | [**WebConfig**](WebConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConfigForm } from './api';

const instance: ConfigForm = {
    RAG_TEMPLATE,
    TOP_K,
    BYPASS_EMBEDDING_AND_RETRIEVAL,
    RAG_FULL_CONTEXT,
    ENABLE_RAG_HYBRID_SEARCH,
    TOP_K_RERANKER,
    RELEVANCE_THRESHOLD,
    HYBRID_BM25_WEIGHT,
    CONTENT_EXTRACTION_ENGINE,
    PDF_EXTRACT_IMAGES,
    DATALAB_MARKER_API_KEY,
    DATALAB_MARKER_API_BASE_URL,
    DATALAB_MARKER_ADDITIONAL_CONFIG,
    DATALAB_MARKER_SKIP_CACHE,
    DATALAB_MARKER_FORCE_OCR,
    DATALAB_MARKER_PAGINATE,
    DATALAB_MARKER_STRIP_EXISTING_OCR,
    DATALAB_MARKER_DISABLE_IMAGE_EXTRACTION,
    DATALAB_MARKER_FORMAT_LINES,
    DATALAB_MARKER_USE_LLM,
    DATALAB_MARKER_OUTPUT_FORMAT,
    EXTERNAL_DOCUMENT_LOADER_URL,
    EXTERNAL_DOCUMENT_LOADER_API_KEY,
    TIKA_SERVER_URL,
    DOCLING_SERVER_URL,
    DOCLING_PARAMS,
    DOCLING_DO_OCR,
    DOCLING_FORCE_OCR,
    DOCLING_OCR_ENGINE,
    DOCLING_OCR_LANG,
    DOCLING_PDF_BACKEND,
    DOCLING_TABLE_MODE,
    DOCLING_PIPELINE,
    DOCLING_DO_PICTURE_DESCRIPTION,
    DOCLING_PICTURE_DESCRIPTION_MODE,
    DOCLING_PICTURE_DESCRIPTION_LOCAL,
    DOCLING_PICTURE_DESCRIPTION_API,
    DOCUMENT_INTELLIGENCE_ENDPOINT,
    DOCUMENT_INTELLIGENCE_KEY,
    MISTRAL_OCR_API_BASE_URL,
    MISTRAL_OCR_API_KEY,
    MINERU_API_MODE,
    MINERU_API_URL,
    MINERU_API_KEY,
    MINERU_PARAMS,
    RAG_RERANKING_MODEL,
    RAG_RERANKING_ENGINE,
    RAG_EXTERNAL_RERANKER_URL,
    RAG_EXTERNAL_RERANKER_API_KEY,
    TEXT_SPLITTER,
    CHUNK_SIZE,
    CHUNK_OVERLAP,
    FILE_MAX_SIZE,
    FILE_MAX_COUNT,
    FILE_IMAGE_COMPRESSION_WIDTH,
    FILE_IMAGE_COMPRESSION_HEIGHT,
    ALLOWED_FILE_EXTENSIONS,
    ENABLE_GOOGLE_DRIVE_INTEGRATION,
    ENABLE_ONEDRIVE_INTEGRATION,
    web,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
