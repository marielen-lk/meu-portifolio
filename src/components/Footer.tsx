
export default function Footer() {
  return (
    <footer className="w-full py-2 bg-gray-100 dark:bg-gray-900 text-center fixed bottom-0">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Marielen Latauczeski. Todos os direitos reservados.
      </p>
    </footer>
  );
}
