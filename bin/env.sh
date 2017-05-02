export DOCKER_CONFIG_PROD=${DOCKER_CONFIG_PROD:-docker-compose.production.yml}
export DOCKER_CONFIG_DEV=${DOCKER_CONFIG_DEV:-docker-compose.override.yml}
export DOCKER_CONFIG_TEST=${DOCKER_CONFIG_TEST:-docker-compose.test.yml}

export POSTGRES_DB=${POSTGRES_DB:-backend}
export POSTGRES_USER=${POSTGRES_USER:-backend}

export DJANGO_SETTINGS_DEV=${DJANGO_SETTINGS_DEV:-project.settings.dev}
export DJANGO_SETTINGS_PROD=${DJANGO_SETTINGS_MODULE:-project.settings.prod}
export DJANGO_SETTINGS_TEST=${DJANGO_SETTINGS_TEST:-project.settings.base}

dcdev() {
    docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_DEV "$@"
}

dcprod() {
    docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_PROD "$@"
}

dctest() {
    docker-compose -f docker-compose.yml -f $DOCKER_CONFIG_TEST "$@"
}
