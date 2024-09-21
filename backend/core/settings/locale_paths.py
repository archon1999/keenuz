from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent

LOCALE_PATHS = (
   (BASE_DIR / 'locale').as_posix(),
)
