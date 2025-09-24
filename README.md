# Foundation

> An open-source, enterprise-grade stack for e-commerce startups.

Inspired by the goal of providing a durable, essential core from which to build, **Foundation** is a self-hosted, open-source technology stack designed to empower new e-commerce startups. The goal is to provide a comprehensive, versatile, and production-ready platform that bundles all the essential services a modern online business needs—from a public-facing website to a secure employee dashboard for accessing their entire tech stack (communication, ticketing, email, cloud storage, etc.).

Core philosophy:

*   **Opinionated Start**: Provide a curated selection of powerful, open-source tools for key business functions (like helpdesks and dashboards). For external services, Foundation defaults to recommending providers like **Zoho** for email and office suites, as they offer a fantastic, low-cost, and reliable alternative to more expensive options like Google Workspace.
*   **Agnostic Core**: The platform is designed to be completely modular. The central employee dashboard will be easy to modify, allowing businesses to swap in links to their preferred providers (like Google Workspace, Microsoft 365, etc.) without having to change the core infrastructure.

The aim is to give e-commerce startups the power of an enterprise-grade tech stack without the cost or complexity by combining a secure, self-hosted core with the flexibility to integrate with any third-party service.

---

### **Getting Started**

#### **1. Configuration**

Before you can run the stack, you need to create your environment configuration:

1.  **Copy the example .env file**:
    ```bash
    cp .env.example .env
    ```
2.  **Edit the `.env` file**: Open the `.env` file in a text editor and customize the variables. At a minimum, you will need to set your `DOMAIN_NAME` and `LETSENCRYPT_EMAIL`, and it is highly recommended that you change the default passwords and secret keys.

#### **2. Running in Development Mode**

For local development and testing, you can run the stack with a simple command. This will start all services and use a local-only routing configuration.

```bash
docker-compose up --build
```

Once the containers are running, you will be able to access:
*   **Main Website**: `http://localhost:8000`
*   **Authentik Login**: `http://auth.localhost:8000`
*   **Traefik Dashboard**: `http://localhost:8080` (For debugging routes)


#### **3. Running in Production Mode**

**Warning:** This command should only be run on a public-facing server where your `DOMAIN_NAME`'s DNS records are pointed to the server's IP address. Running this command locally will result in SSL certificate errors.

```bash
docker-compose --profile prod up --build -d
```
This command starts the services in detached mode (`-d`) and enables the `prod` profile, which activates the secure, HTTPS-enabled frontend service.

---

### **Supporting this Project**

Foundation is an open-source project released under the permissive MIT license.

If you use Foundation to power your business, we would be incredibly grateful if you would include a small "Powered by Foundation" link in your website's footer. While not required, it's a great way to give back to the project and help spread the word.

---

### **Project Roadmap**

**Phase 1: Public-Facing Website** ✅
*   **Initialize Project Structure**: ✅
*   **Develop Frontend Application**: ✅
*   **Style Frontend**: ✅
*   **Containerize Frontend**: ✅

**Phase 2: Core Infrastructure & Authentication** 🚧
*   **Deploy Reverse Proxy**: ✅
*   **Implement Professional Development Workflow**: ✅
*   **Implement Automatic SSL**: ✅
*   **Deploy Authentication Service (Authentik)**: ✅
*   **Verify Authentication Flow**: 🚧

**Phase 3: Employee Dashboard Integration** ❌
*   **Deploy Dashboard Application**: ❌
*   **Secure Dashboard**: ❌
*   **Configure Dashboard**: ❌

**Phase 4: Service Integration (Postiz)** ❌
*   **Deploy Postiz Service**: ❌
*   **Secure Postiz Service**: ❌
*   **Integrate with Dashboard**: ❌

**Phase 5: Helpdesk Integration (UVDesk)** ❌
*   **Deploy UVDesk Service**: ❌
*   **Secure UVDesk Service**: ❌
*   **Integrate with Dashboard**: ❌

**Phase 6: Deployment Preparation** ❌
*   **Finalize Deployment Assets**: ❌
*   **Write Documentation**: ❌

---

### **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### **Licensed Assets**

⚠️ **CRITICAL NOTICE FOR CLONERS/FORKERS**: This repository contains licensed assets that are NOT covered by the MIT License:

- **SVG Icons** in `/frontend/src/assets/background/` are licensed from Flaticon under a Premium license
- **If you clone this repo and want these exact icons**: You MUST purchase your own license from [Flaticon - Clothing Style 5 Pack](https://www.flaticon.com/packs/clothing-style-5)
- **Alternative**: Replace these icons with your own licensed assets
- **The license is non-transferable** - you cannot use the original license holder's rights
- **Personal assets excluded**: Logo and storefront images are gitignored - see `.placeholder` files for requirements
- See `/frontend/src/assets/background/ASSETS_LICENSE.md` for full details
- **Do not** extract or use these icons independently of this project
