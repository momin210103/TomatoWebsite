# TomatoVision — Tomato Leaf Disease Research Website

A responsive, static HTML/CSS/JavaScript research portfolio based on the uploaded thesis:
**“Using Deep Learning in an Explainable Way to Classify Diseases in Tomato Leaves”** (August 2026).

## Pages
- Home
- Tomato Disease
- Methodology
- Results & Analysis
- About Project

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser.
3. For a local development server, run from this folder:
   - Python: `python3 -m http.server 8000`
   - Then open `http://localhost:8000`

No build step or package installation is required.

## Features
- Responsive desktop/tablet/mobile layout
- Hash-based navigation between five page views
- Search and filter for ten tomato leaf categories
- Thesis-based model comparison table
- Downloadable CSV for the comparison table
- CSS/SVG illustrations that work without local image assets

## Research facts used
- Dataset: 16,478 PlantVillage images, 10 classes
- Split: 70% train, 15% validation, 15% test
- Input: 224 × 224 RGB
- Proposed model: DenseNet121
- PlantVillage test accuracy: 99.79%
- PlantDoc cross-dataset accuracy: 85.04%
- Grad-CAM used for visual explanation
- Compared models: VGG16, AlexNet, ResNet50, EfficientNet-B0, DenseNet121

## Important accuracy note
The uploaded thesis identifies **DenseNet121** as the proposed model. EfficientNet-B0 is one of the comparison models. The site reflects that distinction.

The disease visuals and Grad-CAM panel are CSS illustrations, not original thesis figures or actual trained-model outputs. Replace these with approved figures from the thesis before final client delivery if the client expects original experimental plots.

## Before client handover
- Confirm all text and metrics with the approved final thesis.
- Replace conceptual illustrations with original figures where required.
- Add approved repository, publication, and contact URLs if available.
- Test on mobile and desktop.
- Deploy to the client's chosen static host and transfer ownership/access.
- This website does not perform live AI inference. A trained model, preprocessing/inference code, and a backend or suitable model hosting are required for real predictions.
