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
IaC incluye Terraform y Bicep. Platform Engineering se presenta como aprendizaje.

El retrato se dibuja con puntos monocromos y dithering de 1 bit, como pixel art.
Se conserva el encuadre completo, la máscara del fondo y la transición a los logos.

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

Los iconos locales se regeneran con `node scripts/tool-icons.cjs`.
