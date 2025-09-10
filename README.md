# Repository Setup Guidelines

This document outlines steps for protecting the main branch and using GitHub Codespaces to add an initial README.md file to this repository.

---

## 1. Protecting the Main Branch

Protecting the main branch ensures that no one can directly push breaking changes and encourages using pull requests for code review.

### Steps to Protect Main:

1. Go to your repository on GitHub.
2. Click on **Settings** → **Branches**.
3. Under **Branch protection rules**, click **Add rule**.
4. In **Branch name pattern**, enter: `main`.
5. Enable the following options:
   - **Require pull request reviews before merging**
   - **Require status checks to pass before merging** (if applicable)
   - **Include administrators** (optional but recommended)
6. Click **Create** or **Save changes**.

> Now, all changes to `main` must go through pull requests and follow branch protection rules.

---

## 2. Creating a GitHub Codespace to Add Initial README.md

GitHub Codespaces allows you to create a cloud-based development environment directly from your repository.

### Steps:

1. Go to your repository on GitHub.
2. Click the **Code** button → **Open with Codespaces** → **New codespace**.
3. Once the Codespace is ready, a VS Code-like environment opens in your browser.
4. Create a new file named `README.md` in the root of your repository.
5. Add basic content, e.g.:

```markdown
# Project Name

## Overview
Brief description of your project.

## Repository Setup
- Main branch is protected.
- Changes must go through pull requests.
