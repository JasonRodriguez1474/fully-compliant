# GRC Framework Standardization Schema

This directory contains the standardized schema and tools for normalizing various compliance frameworks (CIS, CMMC, NIST) into a consistent format for the Fully-Compliant application.

## Schema Overview

Each compliance framework is represented by three standardized JSON files:

1. **Metadata** (`meta.json`): Framework information including name, version, status, publication date, etc.
2. **Controls** (`controls.json`): All controls in the framework with their details
3. **Mappings** (`mappings.json`): Relationships between controls across different frameworks

## Directory Structure

For each framework (e.g., NIST-800-171-R2), we maintain:

```
└── frameworks/
    └── [framework-name]/
        ├── metadata/
        │   └── meta.json          (Standardized metadata)
        ├── controls/
        │   └── controls.json      (Standardized controls)
        └── mappings/
            └── mappings.json      (Cross-framework control mappings)
```

## Schema Benefits

This standardization enables:

1. **Unified Data Access**: Query controls and relationships consistently across frameworks
2. **Cross-Framework Evidence**: Apply evidence to related controls across different frameworks
3. **Extensibility**: Add new frameworks without changing application code
4. **LLM Integration**: Use AI to help generate mappings and process evidence

## Using LLMs for Framework Conversion

The `llm-prompts.md` file contains prompts for:

1. Extracting metadata from framework documentation
2. Converting controls from CSV, XML, and other formats to our JSON schema
3. Generating cross-framework mappings
4. Processing evidence against controls
5. Applying evidence across related controls in different frameworks

## Implementation Notes

- Framework IDs should follow a consistent naming pattern: `{STANDARD}-{VERSION}` (e.g., `NIST-800-171-R2`)
- Control IDs should preserve their original format (e.g., `3.1.1`) for traceability
- Mapping quality should be indicated with confidence scores
- Source data (CSVs, XML) should be preserved alongside normalized JSON