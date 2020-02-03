const fs = require('fs');

fs.createReadStream('dbDump.zip').pipe(fs.createWriteStream('dbDumpCopy.zip'));
