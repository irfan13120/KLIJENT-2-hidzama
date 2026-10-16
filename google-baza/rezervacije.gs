/**
 * ============================================================
 *  HIDŽAMA SARAJEVO — BAZA REZERVACIJA + E-MAIL
 *  Google Apps Script (radi u tvom Google nalogu, bez ikakvih servisa)
 *
 *  Šta radi:
 *   1) Svaku rezervaciju sa web stranice upisuje u Google tabelu (baza)
 *   2) Odmah šalje e-mail sa svim podacima na EMAIL_VLASNIKA
 *   3) Ako nešto pukne, šalje ti e-mail o grešci (da ništa ne propustiš)
 *
 *  Postavljanje je opisano u README.md (sekcija "Baza podataka").
 * ============================================================
 */

var EMAIL_VLASNIKA = 'irhad1100@gmail.com';
var NAZIV_TABELE   = 'Rezervacije';

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    upisiUTabelu(d);
    posaljiEmail(d);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    try {
      MailApp.sendEmail(EMAIL_VLASNIKA,
        'GREŠKA pri rezervaciji — hidžama',
        'Došlo je do greške pri obradi rezervacije:\n\n' + err + '\n\n' +
        'Podaci primljeni:\n' + (e && e.postData ? e.postData.contents : '(nema)'));
    } catch (e2) {}
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('Baza rezervacija radi ✔ — Hidžama Sarajevo');
}

function upisiUTabelu(d) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(NAZIV_TABELE);
  if (!sh) { sh = ss.insertSheet(NAZIV_TABELE); }

  if (sh.getLastRow() === 0) {
    var zaglavlje = ['Vrijeme upisa', 'Ime i prezime', 'Telefon', 'E-mail', 'Usluga',
                     'Željeni datum', 'Željeno vrijeme', 'Napomena', 'Poslano', 'Stranica'];
    sh.appendRow(zaglavlje);
    sh.getRange(1, 1, 1, zaglavlje.length)
      .setFontWeight('bold').setBackground('#0B2419').setFontColor('#E8D094');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 155);
    sh.setColumnWidth(2, 180);
    sh.setColumnWidth(3, 130);
    sh.setColumnWidth(4, 190);
    sh.setColumnWidth(5, 250);
    sh.setColumnWidth(6, 120);
    sh.setColumnWidth(7, 190);
    sh.setColumnWidth(8, 320);
    sh.setColumnWidth(9, 210);
    sh.setColumnWidth(10, 320);
    sh.getRange('A:A').setNumberFormat('dd.MM.yyyy HH:mm');
  }

  sh.appendRow([
    new Date(),
    d['Ime i prezime'] || '',
    d['Telefon'] || '',
    d['E-mail'] || '',
    d['Usluga'] || '',
    d['Zeljeni datum'] || '',
    d['Zeljeno vrijeme'] || '',
    d['Napomena'] || '',
    d['Poslano'] || '',
    d['Stranica'] || ''
  ]);
}

function posaljiEmail(d) {
  var naslov = 'Nova rezervacija: ' + (d['Ime i prezime'] || '') +
               ' — ' + (d['Zeljeni datum'] || '');
  var html = '' +
    '<div style="font-family:Georgia,serif;max-width:620px;margin:0 auto;border:1px solid #d9c79a;border-radius:14px;overflow:hidden">' +
      '<div style="background:#0B2419;color:#E8D094;padding:22px 26px">' +
        '<div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#C6A44A">Hidžama Sarajevo</div>' +
        '<div style="font-family:Georgia,serif;font-size:26px;color:#FBF7EE;margin-top:8px">Nova rezervacija termina</div>' +
      '</div>' +
      '<div style="padding:24px 26px;background:#FBF7EE">' +
        tabela([
          ['Ime i prezime', d['Ime i prezime']],
          ['Telefon',       d['Telefon']],
          ['E-mail',        d['E-mail']],
          ['Usluga',        d['Usluga']],
          ['Željeni datum', d['Zeljeni datum']],
          ['Željeno vrijeme', d['Zeljeno vrijeme']],
          ['Napomena',      d['Napomena']],
          ['Poslano',       d['Poslano']]
        ]) +
        '<div style="margin-top:22px;padding:16px 18px;background:#fff;border:1px dashed #c9b98a;border-radius:10px;font-family:Arial,sans-serif;font-size:14px;color:#3E4F46">' +
          'Klijentu se javi na <b>' + (d['Telefon'] || '') + '</b> radi potvrde termina.' +
        '</div>' +
      '</div>' +
      '<div style="background:#113122;color:#93BBA3;padding:14px 26px;font-family:Arial,sans-serif;font-size:11px">' +
        'Automatska poruka sa web stranice · rezervacija je upisana i u Google tabelu' +
      '</div>' +
    '</div>';

  MailApp.sendEmail({
    to: EMAIL_VLASNIKA,
    subject: naslov,
    htmlBody: html,
    body: 'Nova rezervacija\n\n' + JSON.stringify(d, null, 2)
  });
}

function tabela(redovi) {
  var h = '<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:15px">';
  for (var i = 0; i < redovi.length; i++) {
    var k = redovi[i][0], v = redovi[i][1] || '—';
    h += '<tr>' +
           '<td style="padding:11px 12px;border-bottom:1px solid #e8dcc0;color:#6B7A72;font-size:12px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;vertical-align:top">' + k + '</td>' +
           '<td style="padding:11px 12px;border-bottom:1px solid #e8dcc0;color:#0C1C15;font-weight:bold">' + String(v).replace(/</g, '&lt;') + '</td>' +
         '</tr>';
  }
  return h + '</table>';
}
