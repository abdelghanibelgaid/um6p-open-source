# Contributing to Open Source at UM6P

Thank you for your interest in contributing! This repository catalogs open-source software created at Mohammed VI Polytechnic University (UM6P).

The goal is to keep the catalog:

- Accurate and up to date  
- Easy to reuse (machine-readable JSON)  
- Simple for UM6P teams to add their projects

This document explains **how to add or update entries** in the catalog and how to propose changes to the controlled vocabularies (domains, types, etc.).


## 1. What you can contribute

You can contribute in several ways:

- **Add a new project** – register an open-source library, dataset, model, tool, web app, etc. created at or co-developed with UM6P.
- **Update an existing entry** – fix description, domain, license, tags, or other metadata.
- **Propose new domains or categories** – suggest updates to `domain.md` (and related controlled fields) when something important is missing.
- **Report issues** – flag outdated entries, broken links, incorrect affiliations, or missing licenses.

You do **not** need to change the README to add or update a project.  
All project metadata lives in:

- [`catalog/software.json`](catalog/software.json) – the catalog
- [`domain.md`](domain.md) – the list of allowed domains


## 2. Before you start

Please make sure that:

1. The project you want to add is:
   - **Open source** (has a public license, e.g. MIT, Apache-2.0, GPL-3.0, etc.)
   - **Substantially developed** at UM6P or by UM6P-affiliated collaborators  
     (students, researchers, engineers, labs, centers, or programs)

2. You know (or can reasonably infer) the following:
   - Who is the **main maintainer** (`owner`)
   - Which **UM6P unit** is primarily responsible (`unit`)
   - The **actual license** in the project repository
   - The main **domain** (from `domain.md`) and a few relevant **tags**

If something is unclear (e.g., unsure about the license), please open an **issue** instead of guessing.


## 3. Catalog schema (quick reference)

Each entry in `catalog/software.json` is a JSON object with the following fields, in this order:

- `name` – Project name  
- `description` – 1–2 line summary  
- `url` – Main project URL (e.g., GitHub, GitLab, Bitbucket, Zenodo, website)  
- `platform` – Platform keyword (e.g., `github`, `gitlab`, `bitbucket`, `zenodo`, `pypi`, `dockerhub`, `huggingface`, `website`, `other`)  
- `type` – One of: `library`, `tool`, `dataset`, `model`, `web-app`, `api`, `service`, `workflow`, `benchmark`, `documentation`  
- `domain` – Main domain, using one value from [`domain.md`](domain.md)  
- `tags` – Short list of extra keywords, e.g.  
  `["genomics", "remote-sensing", "sentinel-2", "ml", "hpc"]`  
- `owner` – Main maintainer or contact person  
- `unit` – UM6P unit (school, lab, center, program, etc.)  
- `language` – Main implementation language (e.g., `Python`, `R`, `Rust`, `TypeScript`)  
- `license` – SPDX identifier (e.g., `MIT`, `Apache-2.0`, `GPL-3.0-only`)  
- `doi` – DOI if available (e.g., Zenodo, DataCite)  
- `status` – One of: `active`, `maintenance`, `archived`, `experimental`  
- `created_at` – Initial creation date (`YYYY-MM-DD`)

Please **do not invent new `type`, `domain`, `platform`, or `status` labels**.  
If you believe something is missing, follow the process in [Section 6](#6-proposing-new-domains-or-categories).


## 4. How to add a new project

### Step 1 – Fork and clone

1. Click **“Fork”** on the GitHub repo.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

3. (Optional but recommended) Create a new branch:

   ```bash
   git checkout -b add-<project-name>
   ```

### Step 2 – Edit `catalog/software.json`

1. Open `catalog/software.json` in your editor.
2. Add a **new JSON object** at the end of the array (just before the closing `]`).
3. Use the exact schema and field order described above.

Example (adapted from `sympde`):

```json
{
    "name": "sympde",
    "description": "SymPDE is a symbolic calculus library for partial differential equations (PDEs) and variational forms.",
    "url": "https://github.com/pyccel/sympde",
    "platform": "github",
    "type": "library",
    "domain": "Computational Science, Modeling & Simulation",
    "tags": ["pde", "finite-elements", "symbolic-math", "hpc"],
    "owner": "Pyccel",
    "unit": "Vanguard Center",
    "language": "Python",
    "license": "MIT",
    "doi": null,
    "status": "active",
    "created_at": "2018-09-02"
  }
```

**Important formatting rules:**

* Ensure the outer file is a **valid JSON array**:

  ```json
  [
    { ... },
    { ... },
    { ... }
  ]
  ```
* Put a **comma** after every object **except** the last one.
* Use **double quotes** `"` around all keys and string values.
* Use `null` (without quotes) if a field such as `doi` is not available.

### Step 3 – Choose consistent values

* **platform**
  Pick one of:
  `github`, `gitlab`, `bitbucket`, `zenodo`, `pypi`, `conda-forge`, `dockerhub`, `huggingface`, `website`, `other`.

* **type**
  Pick one of:
  `library`, `tool`, `dataset`, `model`, `web-app`, `api`, `service`, `workflow`, `benchmark`, `documentation`.

* **domain**
  Must match exactly one value from [`domain.md`](domain.md).
  If you cannot find a suitable domain, see [Section 6](#6-proposing-new-domains-or-categories).

* **tags**

  * Short, lowercase keywords.
  * Use hyphens instead of spaces (e.g., `remote-sensing`, `yield-prediction`).
  * Prefer existing tags if possible (to avoid spelling variants).

* **status**

  * `active` – actively developed and maintained
  * `maintenance` – mostly stable, only bug fixes or small updates
  * `archived` – no longer maintained, kept for reference
  * `experimental` – prototype or early-stage work

* **license**
  Use the SPDX identifier that matches the project’s license file, e.g., `MIT`, `Apache-2.0`, `GPL-3.0-or-later`.
  If the license is not clearly specified, please open an issue instead of guessing.

### Step 4 – Validate JSON

Before committing, make sure `software.json` is valid JSON. A few options:

* Use an online JSON validator, or
* Run `jq` if you have it installed:

  ```bash
  jq . catalog/software.json > /dev/null
  ```

If `jq` exits without error, the JSON is valid.

### Step 5 – Commit and open a Pull Request

1. Commit your changes:

   ```bash
   git add catalog/software.json
   git commit -m "Add <Project Name> to catalog"
   ```
2. Push your branch:

   ```bash
   git push origin add-<project-name>
   ```
3. Open a **Pull Request** from your branch to the main repository’s `main` branch.

In the PR description, please include:

* A short description of the project
* Confirmation that:

  * The project is open source
  * The `license` field matches the repo’s actual license
  * The chosen `domain` matches `domain.md`

---

## 5. How to update an existing project

To update metadata for an existing project:

1. Follow the same fork/branch steps as above.
2. Edit the relevant entry in `catalog/software.json`.
3. Keep the overall **schema and field order** intact.
4. Validate JSON (e.g., with `jq`) to ensure it remains valid.
5. Open a Pull Request with a title like:

   * `Update domain for <Project Name>`
   * `Fix license and tags for <Project Name>`

In the PR description, briefly explain **what changed and why**.

---

## 6. Proposing new domains or categories

Sometimes the existing vocabulary is not enough. In that case:

### New `domain`

1. Check [`domain.md`](domain.md) carefully to ensure there is no suitable existing domain.
2. If you really need a new domain:

   * Open an **issue** with:

     * Proposed `Domain value`
     * Short description
     * 1–2 example projects that would use it
3. Optionally, open a PR that:

   * Adds a row to `domain.md`
   * Uses the new domain in `catalog/software.json` **for that project only**

The maintainers will review and confirm whether to accept the new domain.

### New `type`, `platform`, or `status`

These should change **rarely**.
If absolutely necessary:

1. Open an **issue** proposing:

   * The new value (`type`, `platform`, or `status`)
   * Why existing values are insufficient
   * At least one concrete example project
2. Do not use the new value in `software.json` until it has been accepted.

---

## 7. Review and acceptance criteria

Pull Requests will be reviewed with the following in mind:

* **Validity**

  * JSON is valid and well-formatted.
  * All required fields are present and correctly ordered.

* **Consistency**

  * `domain` matches a value in `domain.md`.
  * `type`, `platform`, and `status` use allowed values.
  * `tags` are reasonable and not excessively long.

* **Accuracy**

  * `url` points to the correct project.
  * `license` matches the project repository.
  * `owner` and `unit` reflect actual UM6P affiliation.

* **Scope**

  * Project is legitimately associated with UM6P (developed at UM6P or in strong collaboration).

If something is unclear, maintainers may ask for clarification or small edits before merging.


## 8. Code of conduct

Please keep all interactions **respectful and constructive**. Treat maintainers and other contributors with professionalism; this catalog is meant to showcase the broader UM6P community.

Thank you for helping build a clear, discoverable ecosystem of **Open Source at UM6P**.
