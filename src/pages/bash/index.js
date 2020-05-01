import React from "react"
import bashStyles from "./bash.module.css"

export default () => (
  <div className={ bashStyles.main }>
    <h1>Bash commands which always with me</h1>

    <h2>Often:</h2>

    <ul className={ bashStyles.list }>
      <li key={ 0 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>pwd</div>
        <div>
          See path of current directory
        </div>
      </li>

      <li key={ 1 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>ls</div>
        <div>
          Показывает содержимое директории
        </div>
        <div>
          ls - содержимое текущей директории
        </div>
        <div>
          ls dir - содержимое директории dir
        </div>
        <div>
          ls -a — показывать скрытые файлы
        </div>
        <div>
          ls -l - одноколоночный формат вывода, больше информации
        </div>
      </li>

      <li key={ 2 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>cd</div>
        <div>Изменяет текущую директорию</div>
        <div>cd directory - перейти к directory</div>
        <div>cd .. - поднятся в родительскую директорию</div>
        <div>cd ~ - перейти в домашний каталог</div>
        <div>cd / - перейти в корневой каталог</div>
      </li>

      <li key={ 5 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>cat file</div>
        <div>cat file - вывести содержимое файла в терминал</div>
      </li>

      <li key={ 6 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>nano</div>
        <div>
          nano file
        </div>
      </li>

      <li key={ 7 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>touch</div>
        <div>touch file.txt - создание пустого файла</div>
      </li>

      <li key={ 8 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>mkdir</div>
        <div>mkdir directory - создать новую директорию directory</div>
      </li>

      <li key={ 9 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>rm</div>
        <div>rm (dir|file) - удаление (директории|файла)</div>
        <div>rm -r dir - удалить директорию вместе со всем поддиректориями</div>
        <div>
          rm -f dir - не возвращать код ошибочного завершения, если ошибки были вызваны несуществующими файлами; не запрашивать подтверждения операций.
        </div>
      </li>

      <li key={ 10 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>mv</div>
        <div>Перемещение или удаление файлов</div>
        <div>
          mv file1 file2 - переименовать file1 в file2
        </div>
        <div>
          mv file dir - переместить file в директорию dir
        </div>
      </li>

      <li key={ 11 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>cp</div>
        <div>
          cp dir1/file1 dir2 - скопировать файл file1 из директории dir1 в директорию dir2
        </div>
        <div>
          cp dir1/file1 dir2/file2 - скопировать файл file1 из директории dir1 в директорию dir2 c новый именем файла file2
        </div>
      </li>

      <li key={ 13 }>
        <div className={ bashStyles.commandTitle }>htop</div>
      </li>


      <li key={ 15 } className={ bashStyles.listItem }>
        <div className={ bashStyles.commandTitle }>wget</div>
        <div>Команда wget позволяет скачивать файлы по http/https, ftp</div>
        <div>wget https://google.com - скачает html страницу google</div>
      </li>

      <li key={ 16 }>
        <div className={ bashStyles.commandTitle }>curl</div>
      </li>

      <li key={ 17 }>
        <div className={ bashStyles.commandTitle }>grep</div>
      </li>

      <li key={ 18 }>
        <div className={ bashStyles.commandTitle }>zip</div>
      </li>

    </ul>

    <h2>Occasionally</h2>

    <div>
      <h2>Другие полезности</h2>

      <div style={{ marginBottom: '15px' }}>
        <div>Команда {' '}<strong>!!</strong>{' '} возвращает последнюю выполненную команду.
          Например, чтобы выполнить последнюю команду под sudo, нужно набрать{' '}<strong>sudo !!</strong>.
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div>
          Команды <strong>;, &&</strong> позволяют выполнять несколько команд сразу.
        </div>
        <div>
          Например, <strong>cd .. ; pwd</strong> или <strong>cd .. pwd </strong>
          Их отличие в том, что команды через <strong>;</strong> будут выполнены, даже если предыдушие завершаться с ошибкой.
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div>Узнать версию: <strong>--version / -v</strong></div>
        Например <strong>node -v</strong>, <strong>python --version</strong>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div>
          <strong>cp -h</strong>,
          {' '}<strong>mv -help</strong>
        </div>

        <div>Посмотреть помощь по команде.</div>
      </div>


      <div>man command</div>
      <div>-h, --help</div>
      <div>
        как соединять флаги, пример -la
      </div>
      <div>clear</div>
      <div>ctrl + R</div>
    </div>

  </div>
)

