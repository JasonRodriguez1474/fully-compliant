# LLM Prompts for Framework Data Normalization

## Metadata Extraction Prompt

```
Given the following compliance framework documentation, extract the metadata according to this JSON schema:

{
  "standard": "Framework abbreviation/name",
  "version": "Version identifier",
  "title": "Full framework title",
  "publication_date": "YYYY-MM-DD",
  "update_date": "YYYY-MM-DD (if available)",
  "withdrawal_date": "YYYY-MM-DD (if available)",
  "superseded_by": "Framework that replaces this (if any)",
  "status": "Current status (Active, Draft, Withdrawn, Superseded)",
  "source_organization": "Organization that created the framework",
  "purpose": "Primary purpose statement",
  "focus": "Primary focus area",
  "applicability": "Where and when this applies",
  "url": "Official documentation URL",
  "basis": "Foundation for this framework",
  "level": "Level identifier (if applicable)"
}

Document:
[Insert framework documentation here]
```

## Control Extraction Prompt (CSV Format)

```
Convert the following CSV data into the standardized control format JSON. Each row represents a control, with columns representing different properties. Here's the mapping:

CSV Header: [headers from input CSV]
JSON Schema:
{
  "id": "Unique identifier",
  "family_id": "Family identifier",
  "family_name": "Family name",
  "title": "Control title",
  "description": "Full description",
  "discussion": "Additional context (if available)",
  "implementation_guidance": "Implementation guidance (if available)",
  "asset_types": ["Array of asset types"],
  "implementation_groups": [1, 2, 3],
  "priority": "Priority level"
}

CSV Data:
[Insert CSV data here]
```

## Control Extraction Prompt (XML Format)

```
Convert the following XML data into the standardized control format JSON. The XML represents controls in a compliance framework with hierarchical relationships.

JSON Schema:
{
  "id": "Unique identifier",
  "family_id": "Family identifier",
  "family_name": "Family name",
  "title": "Control title",
  "description": "Full description",
  "discussion": "Additional context (if available)",
  "implementation_guidance": "Implementation guidance (if available)",
  "asset_types": ["Array of asset types"],
  "priority": "Priority level"
}

XML Data:
[Insert XML data here]
```

## Mapping Generation Prompt

```
Generate mappings between controls in different cybersecurity frameworks based on the following control descriptions. 

For each pair of controls, determine:
1. If they address the same requirement
2. The relationship between them (exact match, subset, superset, related, partial)
3. Notes explaining the relationship

Output format:
{
  "source_framework": "Framework identifier for control 1",
  "source_control": "Control 1 identifier",
  "target_framework": "Framework identifier for control 2",
  "target_control": "Control 2 identifier",
  "relationship": "exact|subset|superset|related|partial",
  "notes": "Explanation of the relationship",
  "mapping_source": "Auto-generated",
  "mapping_confidence": 0.85 
}

Source Control:
Framework: [Source framework name]
Control ID: [Source control ID]
Title: [Source control title]
Description: [Source control description]

Target Control(s):
Framework: [Target framework name]
Control ID: [Target control ID]
Title: [Target control title]
Description: [Target control description]
```

## Evidence Mapping Prompt

```
Given a piece of evidence and a control requirement, determine:
1. Whether the evidence satisfies the control requirement
2. What specific aspects of the control are satisfied
3. What aspects remain unsatisfied (if any)
4. What additional evidence would be needed for full compliance

Control:
ID: [Control ID]
Framework: [Framework name]
Requirement: [Control requirement text]

Evidence:
[Evidence description or document]

Output format:
{
  "control_id": "Control ID",
  "framework": "Framework name",
  "evidence_matches": true|false,
  "satisfaction_level": "full|partial|none",
  "satisfied_aspects": ["List of satisfied requirements"],
  "unsatisfied_aspects": ["List of unsatisfied requirements"],
  "additional_evidence_needed": ["List of additional evidence types needed"],
  "confidence": 0.85
}
```

## Cross-Framework Evidence Application Prompt

```
Given a piece of evidence that satisfies a control in one framework, identify all related controls in other frameworks that this same evidence might satisfy.

Source Control (satisfied by evidence):
Framework: [Source framework name]
Control ID: [Source control ID]
Requirement: [Control requirement text]

Evidence:
[Evidence description or document]

Target Frameworks to check:
[List of framework names]

For each related control across the target frameworks, determine:
1. If the evidence likely satisfies the control
2. The confidence level of this determination
3. Any additional evidence that might be needed

Output format for each related control:
{
  "framework": "Target framework name",
  "control_id": "Related control ID",
  "requirement": "Brief requirement text",
  "evidence_applies": true|false,
  "confidence": 0.85,
  "additional_evidence_needed": ["List of additional evidence needed if any"],
  "notes": "Explanation of relationship"
}
```