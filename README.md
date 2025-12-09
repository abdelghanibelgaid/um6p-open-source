# Open Source at UM6P

<p align="center">
  <a href="https://doi.org/10.5281/zenodo.17818739">
    <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.17818739.svg" alt="DOI">
  </a>
  <img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/abdelghanibelgaid/um6p-open-source/main/catalog/software-badge.json&cacheSeconds=300" alt="Open Source at UM6P">
  <a href="https://discord.gg/gxWZRF5x8R">
    <img src="https://img.shields.io/badge/Discord-Community-5865F2?logo=discord&logoColor=white" alt="Discord: Join the server">
  </a>
  <a href="CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/Contributions-Welcome-ed6e47.svg" alt="Contributions Welcome">
  </a>
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Status: Active">
</p>

A curated list of open-source software developed at Mohammed VI Polytechnic University (UM6P). It highlights libraries, datasets, models, tools, and platforms built by UM6P students, researchers, engineers, and partners.


## What is this Repository?

This repository is **not** a codebase. It is a **directory of projects**. Each entry corresponds to a piece of open-source work made at UM6P: research code, reusable libraries, data portals, teaching tools, or production platforms. The catalog is stored in a single structured file [`catalog/software.json`](catalog/software.json), the source of truth for all projects.


## Catalog Structure

Each project in `catalog/software.json` uses the same schema:

- `name` – Project name  
- `description` – 1–2 line summary  
- `url` – Main URL (e.g., GitHub, GitLab, Bitbucket, Zenodo)  
- `platform` – Platform keyword (e.g., `github`, `gitlab`, `bitbucket`, `zenodo`, `pypi`, `dockerhub`, `huggingface`, `website`, `other`)  
- `type` – `library`, `tool`, `dataset`, `model`, `web-app`, `api`, `service`, `workflow`, `benchmark`, `documentation`  
- `domain` – Main domain, using one value from [`domain.md`](domain.md)  
- `tags` – Short list of extra keywords (e.g., `["genomics", "remote-sensing", "sentinel-2", "ml", "hpc"]`)  
- `maintainers` – List of maintainers or contact persons (e.g., `["Mohamed Example", "Maryam Example"]`)  
- `unit_primary` – List of higher-level UM6P units (e.g., `["College of Computing", "Africa Business School"]`)  
- `unit_secondary` – List of more specific units (lab, center, program, platform, etc.), e.g., `["Bioinformatics Laboratory", "Vanguard Center"]`  
- `language` – Main implementation language (e.g., `Python`, `R`, `Rust`, `TypeScript`)  
- `license` – SPDX identifier (e.g., `MIT`, `Apache-2.0`, `GPL-3.0-only`)  
- `doi` – DOI if available (e.g., Zenodo, DataCite)  
- `status` – `active`, `maintenance`, `archived`, or `experimental`  
- `created_at` – Initial creation date (`YYYY-MM-DD`)  

Domains are standardized in [`domain.md`](domain.md). Please **do not invent new type, domain, or status labels**. If a new domain is needed, open an issue and propose an update to `domain.md`.


## How to Add your Project

To register a new UM6P open-source project in the catalog:

1. Fork this repository.
2. Edit [`catalog/software.json`](catalog/software.json) and add a new entry at the end using the schema above.
3. Make sure:
   - `domain` is one of the values listed in [`domain.md`](domain.md).
   - `status` is set correctly (`active`, `maintenance`, `archived`, or `experimental`).
   - `license` matches the project’s actual license.
4. Open a Pull Request with a clear title, e.g., `Add Software Name`.

Learn more about how to contribute in [CONTRIBUTING.md](CONTRIBUTING.md).

### Example Entry

```json
{
    "name": "sympde",
    "description": "SymPDE is a symbolic calculus library for partial differential equations (PDEs) and variational forms.",
    "url": "https://github.com/pyccel/sympde",
    "platform": "github",
    "type": "library",
    "domain": "Computational Science, Modeling & Simulation",
    "tags": ["pde", "finite-elements", "symbolic-math", "hpc"],
    "maintainers": ["Pyccel"],
    "unit_primary": ["Vanguard Center"],
    "unit_secondary": [],
    "language": "Python",
    "license": "MIT",
    "doi": null,
    "status": "active",
    "created_at": "2018-09-02"
  }
````


## Browsing the Catalog

For now, the easiest way to browse the catalog is directly in GitHub via [`catalog/software.json`](catalog/software.json), or by downloading it and loading it into your own tools (Python, R, etc.) to filter by `domain`, `maintainers`, `unit_primary`, `unit_secondary`, `status`, or `tags`.

In the future, this catalog may power a dedicated interface to visualize different tools and track UM6P open-source activity.


## License

The catalog content in this repository is released under the **MIT License** (see [LICENSE](LICENSE)).
Each linked project keeps its **own** license as defined in its respective repository.


## Disclaimer

This is an independent, unofficial community initiative and is not affiliated with, endorsed by, or officially connected to Mohammed VI Polytechnic University (UM6P) or any of its official units, programs, or subsidiaries.
