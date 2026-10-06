# Perfil de Nestor Velez

El diseño utiliza una terminal de seguridad con una paleta de azules, el retrato
completo de Nestor y su contenido profesional de Cloud y DevSecOps.

GitHub muestra este perfil desde el repositorio público `nestorvelez/nestorvelez`,
con `README.md` y `assets/` en la raíz. El repositorio `readme2` conserva una copia
del proyecto.

## Editar el perfil

- Presentación, tecnologías y contactos: `README.md`.
- Tarjeta de terminal: `assets/whoami-terminal.svg`.
- Retrato fuente: `assets/source/portrait.png`.
- Texto del banner animado: `scripts/banner/generate.py`.
- Áreas de enfoque y aprendizaje: `assets/skills.json` y `assets/langmix.json`.

Los mapas muestran temas de enfoque, sin porcentajes ni puntuaciones de dominio.
Terraform, Platform Engineering y Azure Landing Zones se presentan como aprendizaje.

## Regenerar los recursos

Para los mapas se necesita Node.js:

```sh
node scripts/focus-radar.cjs
```

Para regenerar los banners de partículas se necesita Python y sus dependencias:

```sh
python -m pip install -r scripts/banner/requirements.txt
python scripts/banner/generate.py
```

Los SVG finales ya están generados; GitHub no requiere ejecutar estos comandos.
