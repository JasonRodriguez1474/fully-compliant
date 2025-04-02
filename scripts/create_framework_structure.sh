#!/bin/bash
# filepath: scripts/create_framework_structure.sh

# Please ensure you are at the root of the project


# Define framework folders - use your actual folder names here
FRAMEWORK_FOLDERS=(
  "tools/frameworks/cis-csc-v8.1"
  "tools/frameworks/cmmc-v2.0-l1"
  "tools/frameworks/cmmc-v2.0-l2"
  "tools/frameworks/nist-800-171-r2"
  "tools/frameworks/nist-800-171-r3"
)

# Create the internal structure in each framework folder
for folder in "${FRAMEWORK_FOLDERS[@]}"; do
  mkdir -p "$folder/controls"
  mkdir -p "$folder/metadata"
  mkdir -p "$folder/mappings"
  echo "Created internal structure for $folder"
done

echo "All folders created successfully!"