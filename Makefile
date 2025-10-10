# ---------------------
REMOTE_USER = root
REMOTE_HOST = 176.124.208.218
REMOTE_PATH = ~/
# ---------------------

.PHONY: build build-admin build-site deploy deploy-all deploy-admin deploy-site restart-admin restart-site restart-backend restart-dashboard dev-admin dev-site dev-all

# default: deploy everything
all: deploy-all

# ---------- build targets ----------

build-admin:
	@echo "building admin... 🔨"
	@cd admin/ && bun run build

build-site:
	@echo "building site... 🔨"
	@cd site/ && bun run build

build: build-admin build-site

# ---------- deploy targets ----------

deploy-admin: build-admin
	@echo "🚀 deploying admin-site to admin.radioznb.ru..."
	@scp -r admin/dist/ $(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_PATH)
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "docker compose restart admin-site"
	@echo "✅ admin-site deployed!"

deploy-site: build-site
	@echo "🚀 deploying site to new.radioznb.ru..."
	@scp -r site/out/ $(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_PATH)
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "docker compose restart main-site"
	@echo "✅ main website deployed!"

deploy-all: build
	@echo "🚀 deploying everything..."
	@scp -r docker-compose.yml admin/dist/ site/out/ $(REMOTE_USER)@$(REMOTE_HOST):$(REMOTE_PATH)
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "cd $(REMOTE_PATH) && docker compose down && docker compose up -d --build"
	@echo "✅ full deployment successful!"

deploy: deploy-all

# ---------- restart targets ----------

restart-admin:
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "docker compose restart admin-site"

restart-site:
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "docker compose restart main-site"

restart-backend:
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "docker compose restart convex-backend"

restart-dashboard:
	@ssh $(REMOTE_USER)@$(REMOTE_HOST) "docker compose restart convex-dashboard"

restart-all: restart-admin restart-site restart-backend restart-dashboard

# ---------- dev targets ----------

dev-admin:
	@echo "🔧 starting convex + admin dev servers..."
	@(bun dev) & (cd admin && bun run dev)

dev-site:
	@echo "🔧 starting convex + site dev servers..."
	@(bun dev) & (cd site && bun run dev)

dev-all:
	@echo "🔧 starting all dev servers..."
	@(bun dev) & (cd admin && bun run dev) & (cd site && bun run dev)